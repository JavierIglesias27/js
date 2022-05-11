let $posicion = 0;
const $arrayFotos = [
	"céline.jpg",
	"enrique-hoyos.jpg",
	"shad-meeg.jpg",
	"tatiana.jpg",
	"empty.jpg",
];

const $posicionesArray = $arrayFotos.length;
const imagen = document.getElementById("imagen");
function funcioncontar($number) {
	if ($number != 0) {
		$posicion = $posicion + $number;
		if ($posicion > $posicionesArray - 1) {
			$posicion = 0;
			console.log($posicion > $posicionesArray);
		}
		if ($posicion < 0) {
			$posicion = $posicionesArray - 1;
		}
	} else {
		$posicion = 0;
	}
	imagen.src = "./carousel/" + $arrayFotos[$posicion];
	imagen.alt = $arrayFotos[$posicion].split(".")[0];
	imagen.title = $arrayFotos[$posicion]
		.split(".")[0]
		.replace(/^\w/, (c) => c.toUpperCase());
	document.getElementById("imatge_num").innerHTML = $posicion;
}

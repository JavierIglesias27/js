const $arrayFotos = [
	"céline.jpg",
	"enrique-hoyos.jpg",
	"shad-meeg.jpg",
	"tatiana.jpg",
	"empty.jpg",
];

const $posicionesArray = $arrayFotos.length;
const $imagen = document.getElementById("imagen");
const $numImagen = document.getElementById("imatge_num");
const $posicionNegativa = $posicionesArray - 1;
let $posicion = 0;
function funcioncontar($number) {
	/*hace refrencia al -1+1 de que es parametro q quiero pasar*/
	if ($number != 0) {
		$posicion = $posicion + $number;
		if ($posicion > $posicionNegativa) {
			$posicion = 0;
			console.log($posicion > $posicionesArray);
		}
		if ($posicion < 0) {
			$posicion = $posicionNegativa;
		}
	} else {
		$posicion = 0;
	}
	$imagen.src = "./carousel/" + $arrayFotos[$posicion];
	$imagen.alt =
		$arrayFotos[$posicion].split(
			"."
		)[0]; /*aqui divido ["celine", "".jpeg"] en dos y e devuelve la posicion 0 del array */

	$imagen.title = $arrayFotos[$posicion]
		.split(".")[0]
		.replace(/^\w/, (c) => c.toUpperCase());

	$numImagen.innerHTML = $posicion;
}

/*OTRA FORMA DE PONER LA 1 LETRA EN MAYUSCULAS */
/* console.log(name.charAt[0].toUppercase()) --> ponog la primera en mayúsculas*/
/* console.log(name.charAt[0].slice --> me selecciona la 1 letra*/
/*concateno */
/* console.log(name.charAt[0].toUppercase())+name.charAt[0].slice );*/

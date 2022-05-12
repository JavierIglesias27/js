const letra = [
	"T",
	"R",
	"W",
	"A",
	"G",
	"M",
	"Y",
	"F",
	"P",
	"D",
	"X",
	"B",
	"N",
	"J",
	"Z",
	"S",
	"Q",
	"V",
	"H",
	"L",
	"C",
	"K",
	"E",
	"T",
];
function ValidateDNI(campo, nombreCampoError) {
	let valor = campo.value;
	if (valor.length == 9) {
		let numero = valor.substring(0, valor.length - 1);
		let letra = valor.charAt(valor.length - 1).toUpperCase();
		// console.log(numero + " " + letra);
		// console.log(numero % 23);
		if (letra === letra[numero % 23]) {
			cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
		} else {
			cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
		}
	}
}

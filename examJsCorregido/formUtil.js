function checkNom(campo, nombreCampoError) {
	//console.log(campo);
	let texto = campo.value.trim().replace(/  +/g, " ");
	if (texto.length > 2) {
		// //console.log("if name");
		// campo.classList.remove("corregir");
		// campo.classList.add("correcte");
		// //campo.value = texto;
		// document.getElementById("textoErrorNombre").style.visibility = "hidden";
		cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
	} else {
		// campo.classList.remove("correcte");
		// campo.classList.add("corregir");
		// document.getElementById("textoErrorNombre").style.visibility = "visible";
		cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
	}
}
function checkComgnoms(campo, nombreCampoError) {
	let texto = campo.value.trim().replace(/  +/g, " ");
	let arrayTexto = texto.split(" ");
	// console.log(
	//  (arrayTexto.length >= 2) +
	//      " " +
	//      (arrayTexto[0].length > 3) +
	//      " " +
	//      (arrayTexto[1].length > 3)
	// );
	if (
		arrayTexto.length >= 2 &&
		arrayTexto[0].length > 3 &&
		arrayTexto[1].length > 3
	) {
		// campo.classList.remove("corregir");
		// campo.classList.add("correcte");
		// document.getElementById("textoErrorNombre").style.visibility = "hidden";
		cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
	} else {
		// campo.classList.remove("correcte");
		// campo.classList.add("corregir");
		// document.getElementById("textoErrorNombre").style.visibility = "visible";
		cambiarCorrectoIncorrecto(campo, "textoErrorNombre", false);
	}
}
function cambiarCorrectoIncorrecto(campo, nombreDelCampoTexto, boleano) {
	if (boleano) {
		campo.classList.remove("corregir");
		campo.classList.add("correcte");
		document.getElementById(nombreDelCampoTexto).style.visibility = "hidden";
	} else {
		campo.classList.remove("correcte");
		campo.classList.add("corregir");
		document.getElementById(nombreDelCampoTexto).style.visibility = "visible";
	}
}

function cambiarCorrectoIncorrecto(campo, nombreCampoError, boleano) {
	if (boleano) {
		campo.classList.remove("corregir");
		campo.classList.add("correcte");
		document.getElementById(nombreCampoError).style.visibility = "hidden";
	} else {
		campo.classList.remove("correcte");
		campo.classList.add("corregir");
		document.getElementById(nombreCampoError).style.visibility = "visible";
	}
}

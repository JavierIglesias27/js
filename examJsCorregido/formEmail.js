function ValidateEmail(campo, nombreCampoError) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(campo.value)) {
		cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
	} else {
		cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
	}
}

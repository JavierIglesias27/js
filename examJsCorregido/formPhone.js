function ValidatePhone(campo, nombreCampoError) {
	if ((/^\d{9}$/.test(campo.value)) ) {
		/*/^\+\d{2,3}\s\d{9}$/+34654879123 */ 
		cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
	} else {
		cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
	}
}
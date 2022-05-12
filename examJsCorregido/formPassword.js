function ValidatePassword(campo, nombreCampoError) {
	let texto = campo.value.trim().replace(" ", "");
	let largoTexto = texto.length;
	if (largoTexto > 3) {
		if (largoTexto < 8) {
			let letra1 = texto.slice(0, 1);
			let letra2 = texto.slice(1, 2);
			let letra3 = texto.slice(2, 3);
			let letra4 = texto.slice(3, 4);

			if (
				letra1 == letra1.toUpperCase() ||
				letra2 == letra2.toUpperCase() ||
				letra3 == letra3.toUpperCase() ||
				letra4 == letra4.toUpperCase()
			) {
				//true
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}

			if (
				letra1 == letra1.toLowerCase() ||
				letra2 == letra2.toLowerCase() ||
				letra3 == letra3.toLowerCase() ||
				letra4 == letra4.toLowerCase()
			) {
				//true
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}

			if (
				!isNan(letra1) ||
				!isNan(letra2) ||
				!isNan(letra3) ||
				!isNan(letra4)
			) {
				//true
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				//false
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}
			if (
				letra1 == letra1.includes(/[!@#\$%\^\&*\)\(+=._-]/) ||
				letra2 == letra2.includes(/[!@#\$%\^\&*\)\(+=._-]/) ||
				letra3 == letra3.includes(/[!@#\$%\^\&*\)\(+=._-]/) ||
				letra4 == letra4.includes(/[!@#\$%\^\&*\)\(+=._-]/)
			) {
				//true
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				//false
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}
		} else if (largoTexto < 12) {
			let bloque1 = texto.slice(4);
			let bloque2 = texto.slice(4, 8);

			let letra5 = texto.slice(4, 5);
			let letra6 = texto.slice(5, 6);
			let letra7 = texto.slice(6, 7);
			let letra8 = texto.slice(7, 8);

			if (
				letra5 == letra5.toUpperCase() ||
				letra6 == letra6.toUpperCase() ||
				letra7 == letra7.toUpperCase() ||
				letra8 == letra8.toUpperCase()
			) {
				//true
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}

			if (
				letra5 == letra5.toLowerCase() ||
				letra6 == letra6.toLowerCase() ||
				letra7 == letra7.toLowerCase() ||
				letra8 == letra8.toLowerCase()
			) {
				//true
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}

			if (
				!isNan(letra5) ||
				!isNan(letra6) ||
				!isNan(letra7) ||
				!isNan(letra8)
			) {
				//true
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				//false
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}
			if (
				letra5 == letra5.includes(/[!@#\$%\^\&*\)\(+=._-]/) ||
				letra6 == letra6.includes(/[!@#\$%\^\&*\)\(+=._-]/) ||
				letra7 == letra7.includes(/[!@#\$%\^\&*\)\(+=._-]/) ||
				letra8 == letra8.includes(/[!@#\$%\^\&*\)\(+=._-]/)
			) {
				//true
				cambiarCorrectoIncorrecto(campo, nombreCampoError, true);
			} else {
				//false
				cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
			}
		} else {
			let bloque1 = largo.texto.slice(4);
			let bloque2 = largo.texto.slice(4, 8);
			let bloque3 = largo.texto.slice(8, 12);
		}
	} else {
		cambiarCorrectoIncorrecto(campo, nombreCampoError, false);
	}
}

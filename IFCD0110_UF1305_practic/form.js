/**
 * aLaFuncionNombre1()
 * condiciona a escribir minimo de letras
 * caso contrario error
 **/

function aLaFuncionNombre1(texto1) {
	let $totalPalabras1 = texto1.trim(/ +/g, "").replace().split(" ");
	console.log($totalPalabras1);

	if (
		($totalPalabras1.length == 1 &&
		$totalPalabras1[0].length >= 3 ) ||
		($totalPalabras1.length == 2 &&
		$totalPalabras1[1].length >= 3 )

	) {
		console.log("OK");
		
		if ($totalPalabras1[0] != $totalPalabras1 [1]) {

			//document.getElementsByTagName("input")[1].classList.add("correcte");
			
			formulario.fname.style.backgroundColor = "greenyellow";
			formulario.fname.style.border = "2px solid green";
			$input1 = true;
			checkbutton();
		} else {
			// document.getElementsByTagName("input")[1].classList.add("corregir");
			formulario.fname.style.backgroundColor = "#ff7575";
			formulario.fname.style.border = "2px solid red";
			$input1 =false;
			checkbutton();
		}
	} else {
		$input1 = false;
		checkbutton();
		formulario.fname.style.backgroundColor = "#ff7575";
		formulario.fname.style.border = "2px solid red";
		
	}
}

/**
 * aLaFuncionCognoms()
 * condiciona a escribir minimo dos  o tres apellidos  y tres letras
 * condicionandolos a que todos sean diferentes
 * caso contrario error
 **/

function funcionCognoms($texto) {
	let $totalPalabras = $texto.trim(/ +/g, "").replace().split(" ");
	console.log($totalPalabras);
	if (
		($totalPalabras.length == 2 &&
		$totalPalabras[0].length >= 3 &&
		$totalPalabras[1].length >= 3) ||
		($totalPalabras.length == 3 &&
		$totalPalabras[0].length >= 3 &&
		$totalPalabras[1].length >= 3 &&
		$totalPalabras[2].length >= 3 )

	) {
		console.log("OK");
		
		if ($totalPalabras[0] != $totalPalabras[1]&& $totalPalabras[1] != $totalPalabras[2]  ) {

			//document.getElementsByTagName("input")[1].classList.add("correcte");
			
			formulario.lname.style.backgroundColor = "greenyellow";
			formulario.lname.style.border = "2px solid green";
			$input2 = true;
			checkbutton();
		} else {
			// document.getElementsByTagName("input")[1].classList.add("corregir");
			formulario.lname.style.backgroundColor = "#ff7575";
			formulario.lname.style.border = "2px solid red";
			$input2 = false;
			checkbutton();
		}
	} else {
		$input2 = false;
		checkbutton();
		formulario.lname.style.backgroundColor = "#ff7575";
		formulario.lname.style.border = "2px solid red";
		
	}
}

/**
 * validarEmail()
 * condiciona a escribir un mail que contenga nombre + @ + gmail.com/es o hotmail.es/.com
 * caso contrario error
 **/
function validarEmail($valor) {
	if (/^\w+([\.-]?\w+)*@(?:|hotmail|gmail)\.(?:|com|es)+$/.test($valor)) {
		console.log("La dirección de email " + $valor + " es correcta.");
		$input3 = true;
		checkbutton();
		//document.getElementsByTagName("input")[2].classList.add("correcte");
		formulario.email.style.backgroundColor = "greenyellow";
		formulario.email.style.border = "2px solid green";
	} else {
		console.log("La dirección de email es incorrecta.");
		$input3 = false;
		checkbutton();
		//document.getElementsByTagName("input")[2].classList.add("corregir");
		formulario.email.style.backgroundColor = "#ff7575";
		formulario.email.style.border = "2px solid red";
	}
}
/**
 * funcionPassword()
 * condiciona a escribir un password seguro
 * debe contener: Al menos una letra, al menos un numero, al menos una letra mayúscula, al menos 8 caracteres, no permite espacios.
 * caso contrario error
 **/

 function validarPassword($valor) {
 if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test($valor)) {
	 console.log("password correcte " + $valor + " es correcta.");
	 $input4 = true;
	 checkbutton();
	 // document.getElementsByTagName("input")[3].classList.add("correcte");
	formulario.password.style.backgroundColor = "greenyellow";
	formulario.password.style.border = "2px solid green";
 } else {
	 console.log("La dirección de email es incorrecta.");
	 $input4 = false;
	 checkbutton();
	 //document.getElementsByTagName("input")[3].classList.add("corregir");
	 formulario.password.style.backgroundColor = "#ff7575";
	formulario.password.style.border = "2px solid red";

 }
}

/**
 * funcionDni()
 * condiciona a escribir un dni de 8 digitos  mas letra
 * comprueba la letra mediante modulo % 23
 * caso contrario error
 **/

const inputDni = formulario.dni;

	function funcionDni($dni) {
		let $numero
		let $letr
		let $letra
		let $expresion_regular_dni
	   
		$expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
	   
		if($expresion_regular_dni.test ($dni) == true){
		   $numero = $dni.substr(0,$dni.length-1);
		   $letr = $dni.substr($dni.length-1,1);
		   $numero = $numero % 23;
		   $letra='TRWAGMYFPDXBNJZSQVHLCKET';
		   $letra=$letra.substring($numero,$numero+1);
		   $input5 = true;
			checkbutton();

			if ($letra!=$letr.toUpperCase()) {
				
				console.log('Dni erroneo, la letra del NIF no se corresponde');
				// document.getElementsByTagName("input")[4].classList.add("corregir");
				formulario.dni.style.backgroundColor = "#ff7575";
				formulario.dni.style.border = "2px solid red";
			}else{	
				console.log('Dni correcto');
				formulario.dni.style.backgroundColor = "greenyellow";
				formulario.dni.style.border = "2px solid green";
				//document.getElementsByTagName("input")[4].classList.add("correcte");
			}
		}else{
			$input5 = false;
			checkbutton();	
		 }
	  }
/**
 * addEventlistener()
 * indica el número de caracteres que hay en el text area 
 * en este caso se ha limitado a 600
 **/

		const $mensaje = document.getElementById('missatge');
		const contador = document.getElementById('form_count_chars_b');
		$mensaje.addEventListener('input', function(e) {
			const target = e.target;
			const longitudMax = target.getAttribute('maxlength');
			const longitudAct = target.value.length;
			contador.innerHTML = `${longitudAct}/${longitudMax}`;
		});
				

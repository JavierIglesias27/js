/*BOTON 1 CREAR COOKIES */

document
	.getElementById("funCrearCookie")
	.addEventListener("click", funCrearCookie);

function funCrearCookie() {
	document.getElementById("preg1").style.visibility = "visible";
	document.getElementById("fecha").style.visibility = "visible";
	document.getElementById("cantidades").style.visibility = "visible";
}
/*INPUT DATE */
document.getElementById("funInputDate").addEventListener("click", funInputDate);
function funInputDate() {
	let dias = document.getElementById("inputDate").value;
	let resto = new Date(dias) - new Date();
	let campo = resto / 1000 / 60 / 60 / 24;
	console.log(Math.ceil(campo));

	setCookie(
		document.getElementById("nameCookie").value,
		document.getElementById("nameValue").value,
		campo
	);
	console.log(document.getElementById("nameCookie").value);
	console.log(document.getElementById("nameValue").value);
	console.log(document.getElementById("inputDate").value);
}

/*INPUT CANTIDADES */
document
	.getElementById("funInputCantidades")
	.addEventListener("click", funInputCantidades);
function funInputCantidades() {
	let anos = new Number(document.getElementById("anos").value * 365);
	let meses = new Number(document.getElementById("meses").value * 30);
	let dias = new Number(document.getElementById("dias").value);

	setCookie(
		document.getElementById("nameCookie").value,
		document.getElementById("nameValue").value,
		anos + meses + dias
	);
	console.log(document.getElementById("nameCookie").value);
	console.log(document.getElementById("nameValue").value);
	console.log(anos + meses + dias);
	listCookies();
}

/*DETECTA COOKIES */
document
	.getElementById("funDetectaCookie")
	.addEventListener("click", funDetectaCookie);
function funDetectaCookie() {
	alert(
		detectaCookie(prompt("Introduzca nombre de la cookie:"), listCookies())
	);
}
/*LEER COOKIES */
document
	.getElementById("funLeerCookies")
	.addEventListener("click", funLeerCookies);
function funLeerCookies() {
	//alert(getCookieLeer(prompt("Nombre cookie")), listCookies());
	alert(
		document.getElementById("selector").value +
			"  " +
			getCookie(document.getElementById("selector").value)
	);
}
/*MODIFICAR COOKIE */
document
	.getElementById("funModificarCookie")
	.addEventListener("click", funModificarCookie);
function funModificarCookie() {
	let var1 = document.getElementById("selector").value;
	let var2 = getCookie(var1);
	document.getElementById("preg2").style.visibility = "visible";
	document.getElementById("fecha1").style.visibility = "visible";
	document.getElementById("cantidades1").style.visibility = "visible";
	console.log(getCookie(var1));
	document.getElementById("nombreCookie").value = var1;
	document.getElementById("nombreValue").value = var2;
}
/*MODIFICAR COOKIE DATE1 */
document
	.getElementById("funModificarDate1")
	.addEventListener("click", funModificarDate1);
function funModificarDate1() {
	setCookie(
		document.getElementById("nombreCookie").value,
		document.getElementById("nombreValue").value,
		document.getElementById("inputDate1").value
	);
	console.log(document.getElementById("nombreCookie").value);
	console.log(document.getElementById("nombreValue").value);
	console.log(document.getElementById("inputDate1").value);
}

/*MODIFICAR COOKIE CANTIDAD 1 */
document
	.getElementById("funModificarCantidad1")
	.addEventListener("click", funModificarCantidad1);
function funModificarCantidad1() {
	let anos = new Number(document.getElementById("anos1").value * 365);
	let meses = new Number(document.getElementById("meses1").value * 30);
	let dias = new Number(document.getElementById("dias1").value);

	setCookie(
		document.getElementById("nombreCookie").value,
		document.getElementById("nombreValue").value,
		anos + meses + dias
	);
	console.log(document.getElementById("nombreCookie").value);
	console.log(document.getElementById("nombreValue").value);
	console.log(anos + meses + dias);
}

/*BORRAR COOKIES */
document
	.getElementById("funBorrarCookie")
	.addEventListener("click", funBorrarCookie);
function funBorrarCookie() {
	//alert(removeCookie(prompt("nombre a eliminar:"), listCookies()));
	alert(removeCookie(document.getElementById("selector").value, listCookies()));
}

/*DESPLEGABE LISTCOOKIES */

select = document.getElementById("selector");
listCookies();
function listCookies() {
	var theCookies = document.cookie.split(";");
	select.innerHTML = ""; /*vacia la lista selector */
	for (var i = 1; i <= theCookies.length; i++) {
		var opt = document.createElement("option");
		let split = theCookies[i - 1].split("=")[0].trim();
		opt.value = split;
		opt.innerHTML = split;
		select.appendChild(opt);
	}
}

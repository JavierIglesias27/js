/*BOTON 1 CREAR COOKIES */

function funCrearCookie() {
	document.getElementById("preg1").style.visibility = "visible";
	document.getElementById("fecha").style.visibility = "visible";
	document.getElementById("cantidades").style.visibility = "visible";
}
/*INPUT DATE */

function funInputDate() {
	setCookie(
		document.getElementById("nameCookie").value,
		document.getElementById("nameValue").value,
		document.getElementById("inputDate").value
	);
}
function FunConsoleInputDate() {
	console.log(document.getElementById("nameCookie").value);
	console.log(document.getElementById("nameValue").value);
	console.log(document.getElementById("inputDate").value);
}
/*INPUT CANTIDADES */

function funInputCantidades() {
	setCookie(
		document.getElementById("nameCookie").value,
		document.getElementById("nameValue").value,
		document.getElementById("anos").value * 365 +
			document.getElementById("meses").value * 30 +
			document.getElementById("dias").value
	);
	listCookies();
}
function funConsoleInputCantidades() {
	console.log(document.getElementById("nameCookie").value);
	console.log(document.getElementById("nameValue").value);
	console.log(
		document.getElementById("anos").value * 365 +
			document.getElementById("meses").value +
			document.getElementById("dias").value
	);
}
/*DETECTA COOKIES */

function funDetectaCookie() {
	alert(
		detectaCookie(prompt("Introduzca nombre de la cookie:"), listCookies())
	);
}
/*LEER COOKIES */

function funLeerCookies() {
	alert(getCookieLeer(prompt("Nombre cookie")), listCookies());
}
/*MODIFICAR COOKIE */

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

function funModificarDate1() {
	setCookie(
		document.getElementById("nombreCookie").value,
		document.getElementById("nombreValue").value,
		document.getElementById("inputDate1").value
	);
}
function funConsoleModifificarDate1() {
	console.log(document.getElementById("nombreCookie").value);
	console.log(document.getElementById("nombreValue").value);
	console.log(document.getElementById("inputDate1").value);
}
/*MODIFICAR COOKIE CANTIDAD 1 */

function funModificarCantidad1() {
	setCookie(
		document.getElementById("nombreCookie").value,
		document.getElementById("nombreValue").value,
		document.getElementById("anos1").value * 365 +
			document.getElementById("meses1").value * 31 +
			document.getElementById("dias1").value
	);
	listCookies();
}
function funConsoleModificarCantidad1() {
	console.log(document.getElementById("nombreCookie").value);
	console.log(document.getElementById("nombreValue").value);
	console.log(
		document.getElementById("anos1").value * 365 +
			document.getElementById("meses1").value +
			document.getElementById("dias1").value
	);
}
/*BORRAR COOKIES */

function funBorrarCookie() {
	alert(removeCookie(prompt("nombre a eliminar:"), listCookies()));
}

/*DESPLEGABE LISTCOOKIES */

select = document.getElementById("selector");
listCookies();
function listCookies() {
	var theCookies = document.cookie.split(";");
	for (var i = 1; i <= theCookies.length; i++) {
		var opt = document.createElement("option");
		opt.value = theCookies[i - 1].split("=")[0];
		opt.innerHTML = theCookies[i - 1].split("=")[0];
		select.appendChild(opt);
	}
}

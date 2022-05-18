function CheckcookieEnabled() {
	if (navigator.cookieEnabled) {
		alert("se pueden crear cookies xq no esta bloqueadas");
	} else {
		alert("coockies estan bloquedas en el navegador");
	}
}

function setCookie(cname, cvalue, exdays) {
	const d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function detectaCookie(cname) {
	if (cname != "") {
		let name = cname + "=";
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == " ") {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return "La cookie:     " + cname + "  :SI EXISTE";
			}
		}
		return "";
	} else {
		console.log("esta vacio");
		return "La cookie introducida NO existe";
	}
}

function getCookie(cname) {
	let name = cname.trim() + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
			//	return( "\nNombre Cookie: " + cname+"\nNombre Value:  " + c.substring(name.length, c.length));
		}
	}
	return "La cookie introducida NO existe";
}
function getCookieLeer(cname) {
	let name = cname.trim() + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return (
				"\nNombre Cookie: " +
				cname +
				"\nNombre Value:  " +
				c.substring(name.length, c.length)
			);
		}
	}
	return "La cookie introducida NO existe";
}

function checkCookie() {
	let user = getCookie("nameUser");
	if (user != "") {
		alert("Welcome again " + user);
	} else {
		user = prompt("Please enter your name:", "");
		if (user != "" && user != null) {
			setCookie("nameUser", user, 30);
		}
	}
}
function removeCookie(cname) {
	let user = getCookie("nameUser");
	if (cname != "" && cname != null && user != "") {
		setCookie(cname, "", -1);
		return "Cookie eliminada correctamente";
	} else {
		return "La cookie NO existe y no puede ser eliminada";
	}
}

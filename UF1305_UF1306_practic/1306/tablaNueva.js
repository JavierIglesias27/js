function genera_tabla() {
	var body = document.getElementsByTagName("main")[0];

	var tabla = document.createElement("table");
	var tblBody = document.createElement("tbody");

	for (var i = 0; i < 4; i++) {
		var hilera = document.createElement("tr");

		for (var j = 0; j < 4; j++) {
			var celda = document.createElement("td");
			var textoCelda = document.createTextNode("celda " + i + ", columna " + j);
			celda.appendChild(textoCelda);
			hilera.appendChild(celda);
		}
		tblBody.appendChild(hilera);
	}
	tabla.appendChild(tblBody);
	body.appendChild(tabla);
	tabla.setAttribute("border", "2");
}

document.getElementById("mostrarAlumnos").addEventListener("click", () => {
	document.getElementById("mostrar").style.visibility = "visible";
});

document.getElementById("Agregar").addEventListener("click", confirmar);
function modificar() {
	let nombre = document.getElementById("input_Nombre").value;
	let exam1 = document.getElementById("input_Exam1").value;
	let exam2 = document.getElementById("input_Exam2").value;
	let exam3 = document.getElementById("input_Exam3").value;

	let tr = document.createElement("tr");
	tr.id = nombre;
	let td_Nombre = document.createElement("td");
	let button = document.createElement("button");
	button.value = nombre;
	button.classList.add("botonSuprimir");
	button.innerHTML = nombre;
	td_Nombre.appendChild(button);

	button.addEventListener("click", function () {
		document.getElementById(this.value).remove();
	});
	let td_Exam1 = document.createElement("td");
	td_Exam1.innerHTML = exam1;

	let td_Exam2 = document.createElement("td");
	td_Exam2.innerHTML = exam2;

	let td_Exam3 = document.createElement("td");
	td_Exam3.innerHTML = exam3;

	let td_media = document.createElement("td");
	let medias = (parseInt(exam1) + parseInt(exam2) + parseInt(exam3)) / 3;
	td_media.innerHTML = medias;
	td_media.classList.add("total");

	if (medias < 5) {
		td_media.classList.add("suspes");
	} else if (medias < 7) {
		td_media.classList.add("aprovat");
	} else if (medias < 9) {
		td_media.classList.add("notable");
	} else if (medias < 11) {
		td_media.classList.add("excellent");
	} else if (medias > 10) {
		td_media.classList.add("suspes");
	}

	let td_calificacion = document.createElement("td");
	if (medias < 5) {
		td_calificacion.innerHTML = "Suspes";
		td_calificacion.classList.add("total");
		td_calificacion.classList.add("suspes");
	} else if (medias < 7) {
		td_calificacion.innerHTML = "Aprovat";
		td_calificacion.classList.add("total");
		td_calificacion.classList.add("aprovat");
	} else if (medias < 9) {
		td_calificacion.innerHTML = "Notable";
		td_calificacion.classList.add("total");
		td_calificacion.classList.add("notable");
	} else if (medias < 11) {
		td_calificacion.innerHTML = "Excellent";
		td_calificacion.classList.add("total");
		td_calificacion.classList.add("excellent");
	} else if (medias > 10) {
		td_calificacion.innerHTML = "No es possible";
		td_calificacion.classList.add("total");
		td_calificacion.classList.add("suspes");
	}

	tr.appendChild(td_Nombre);
	tr.appendChild(td_Exam1);
	tr.appendChild(td_Exam2);
	tr.appendChild(td_Exam3);
	tr.appendChild(td_media);
	tr.appendChild(td_calificacion);

	document.getElementById("tableData").appendChild(tr);
}
function confirmar() {
	if (confirm("Estas seguro?")) {
		modificar();
	} else {
		alert("Cancelado");
	}
}

function downloadCSV(csv, filename) {
	var csvFile;
	var downloadLink;

	csvFile = new Blob([csv], { type: "text/csv" });

	downloadLink = document.createElement("a");

	downloadLink.download = filename;

	downloadLink.href = window.URL.createObjectURL(csvFile);

	downloadLink.style.display = "none";

	document.body.appendChild(downloadLink);

	downloadLink.click();
}
function exportTableToCSV(filename) {
	var csv = [];
	var rows = document.querySelectorAll("table tr");

	for (var i = 0; i < rows.length; i++) {
		var row = [],
			cols = rows[i].querySelectorAll("td, th");

		for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

		csv.push(row.join(","));
	}

	downloadCSV(csv.join("n"), filename);
}
function removeTable() {
	document.getElementById("tabla1").remove();
}
function RemoveCell() {
	let tableData = document.getElementById("tableData");
	let tagName = document.getElementsByTagName("button");
	tableData.tagName.addEventListener("click", () => {
		tableData.tagName.th.remove();
	});
}

document.getElementById("anadirUF").addEventListener("click", () => {
	let title = prompt("Añadir nueva UF");
	document.getElementById("tituloUf").innerHTML = "<h2>" + title + "</h2>";
});

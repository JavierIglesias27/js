const div = document.getElementById("tablas");

let listaDistribuidor = [];
class Distribuidor {
	constructor(nameDistribuidor, listaLibreriasReceptor) {
		this.nameDistribuidor = nameDistribuidor;
		this.listaLibrerias = listaLibreriasReceptor.filter((n) => n);
		this.listaLibros = [];
		listaDistribuidor.push(nameDistribuidor);

		let divDistribuidor = document.createElement("div");
		divDistribuidor.id = nameDistribuidor;
		divDistribuidor.style.backgroundColor = "yellow";
		let h2 = document.createElement("h2");
		h2.innerHTML = nameDistribuidor;
		divDistribuidor.appendChild(h2);
		let tabla = document.createElement("table");

		let thead = document.createElement("thead");
		let tr_head = document.createElement("tr");
		tr_head.appendChild(document.createElement("td"));
		//añadimos librerias
		for (let i = 0; i < this.listaLibrerias.length; i++) {
			let td = document.createElement("td");

			td.innerHTML = this.listaLibrerias[i];
			tr_head.appendChild(td);
		}

		thead.appendChild(tr_head);
		tabla.appendChild(thead);

		//BODY
		let tbody = document.createElement("tbody");
		tabla.appendChild(tbody);

		//FIN TABLA
		divDistribuidor.appendChild(tabla);
		let botonAnadirLibro = document.createElement("button");
		botonAnadirLibro.innerHTML = "Añadir nuevo libro";
		botonAnadirLibro.addEventListener("click", () => {
			let tr_body = document.createElement("tr");
			let td_nombre = document.createElement("td");
			td_nombre.innerHTML = prompt("Nombre del Libro");
			tr_body.appendChild(td_nombre);

			for (let i = 0; i < this.listaLibrerias.length; i++) {
				//para crear relleno dentro de los campos
				let relleno = document.createElement("td");
				relleno.innerHTML = prompt("precio" + this.listaLibrerias[i]);
				tr_body.appendChild(relleno);
			}

			tbody.appendChild(tr_body);
		});

		divDistribuidor.appendChild(botonAnadirLibro);

		divDistribuidor.appendChild(tabla);
		let botonEliminarTabla = document.createElement("button");
		botonEliminarTabla.innerHTML = "Eliminar Tabla";
		botonEliminarTabla.addEventListener("click", () => {
			document.getElementById(this.nameDistribuidor).remove();
		});

		divDistribuidor.appendChild(botonEliminarTabla);
		div.appendChild(divDistribuidor);
	}
}
function createDistribuidor(nameDistribuidorInput, listadelibreriasInput) {
	if (listaDistribuidor.includes(nameDistribuidorInput)) {
		alert('Error: Distribuidor name "' + nameDistribuidorInput + '" exist');
	} else {
		let lista = listadelibreriasInput.trim().replaceAll("  ", " ").split(",");

		for (let i = 0; i < lista.length; i++) {
			let counter = 0;
			for (let x = 0; x < lista.length; x++) {
				if (lista[i] == lista[x]) {
					counter++;
				}
			}
			if (counter > 1) {
				lista.splice(i, 1);
			}
		}
		console.log(lista);

		new Distribuidor(nameDistribuidorInput, lista);
	}
}
class Libro {
	constructor(nameLibro) {
		this.nameLibro = nameLibro;
	}
}

function recolectorDeLibrerias() {
	do {
		let promp = prompt("Añadir nueva Libreria:");
		if (promp != "" && isNaN(promp)) {
			document.getElementById("librerias").value += promp + ",";
		}
	} while (confirm("Añadir otra librería?"));
}

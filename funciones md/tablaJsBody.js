"use strict"; /*me obliga  aponer let a la variable */
/*al poner las ="" en el constructor le doy un valorx defecto */
let listaLibro = [];

class Libro {
	constructor(
		titulo = "",
		autor = "",
		edicion = Libro.generarRandomAlfanumerico(),
		precio = Libro.generarPrecio(),
		tematica = [
			Libro.generarRandomAlfanumerico(),
			Libro.generarRandomAlfanumerico(),
		]
	) {
		this.titulo = titulo;

		this.autor = autor;

		this.edicion = edicion;

		this.precio = precio;

		this.tematica = tematica;

		listaLibro.push(this);

		this.imprimeLibroTabla();
	}
	imprimeLibroTabla() {
		let tbody = document.getElementById("tbody1");

		let row_2 = document.createElement("tr");
		row_2.id = this.titulo;
		let row_2_data_1 = document.createElement("td");
		row_2_data_1.innerHTML = this.titulo;
		let row_2_data_2 = document.createElement("td");
		row_2_data_2.innerHTML = this.autor;
		let row_2_data_3 = document.createElement("td");
		row_2_data_3.innerHTML = this.edicion;
		let row_2_data_4 = document.createElement("td");
		row_2_data_4.innerHTML = this.precio;
		let row_2_data_5 = document.createElement("td");
		row_2_data_5.innerHTML = this.tematica;
		let boton_eliminar = document.createElement("button");
		boton_eliminar.innerHTML = "remove";

		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.appendChild(row_2_data_4);
		row_2.appendChild(row_2_data_5);
		row_2.appendChild(boton_eliminar);
		tbody.appendChild(row_2);

		boton_eliminar.value = this.titulo;
		boton_eliminar.addEventListener("click", function () {
			document.getElementById(this.value).remove();
		});

		console.log(tbody);
	}
	static generarPrecio() {
		return Math.floor(Math.random() * (99 + 1 - 10) + 10) + "€";
	}
	static generarRandomAlfanumerico(character) {
		character;
		var characters =
			"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

		var result = "";

		var charactersLength = characters.length;

		for (var i = 0; i < 10; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}

		return result;
	}
	pintarTematicaLinea() {
		let acumulador = "";
		for (var i = 0; i < this.tematica.length; i++) {
			acumulador += this.tematica[i] + ", ";
		}
		return acumulador.slice(0, -2);
	}
	// console.table(listaLibro);
	toJSON() {
		return JSON.stringify({
			titulo: this.titulo,
			autor: this.autor,
			edicion: this.edicion,
			precio: this.precio,
			tematica: this.pintarTematicaLinea(),
		});
	}
}

new Libro("libro1", "autor1", "azteca", ["hola", "adios"], 75);
new Libro("libro2", "autor2", "dioses", ["mango", "pera"], 75);
new Libro("libro3", "autor3");
new Libro("libro4", "autor4");
new Libro("libro5", "autor5");
new Libro("libro6", "autor6");
new Libro("libro7", "autor7");
new Libro("libro8", "autor8");
new Libro("libro9", "autor9");
new Libro("libro10", "autor10");

document.getElementById("Agregar").addEventListener("click", modificar);
function modificar() {
	new Libro(
		document.getElementById("input_Titulo").value,
		document.getElementById("input_Autor").value,
		document.getElementById("input_Edicion").value,
		document.getElementById("input_precio").value,
		document.getElementById("input_Tematica").value
	);
}

/* el array de console table */
/*ordenar mediante sort */
/*Acceder a la tabla y buscar los parametros */
// console.log(listaLibro[0].autor);
// console.log(listaLibro[1].tematica);
// console.log(listaLibro[4].edicion);
// console.log(listaLibro);
console.table([
	JSON.parse(listaLibro[0].toJSON()),
	JSON.parse(listaLibro[1].toJSON()),
]);
console.log(listaLibro[0]);
//console.assert(JSON.parse(listaLibro[0]) == JSON.parse(listaLibro[0].toJSON()));

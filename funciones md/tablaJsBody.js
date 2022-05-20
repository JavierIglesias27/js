"use strict"; /*me obliga  aponer let a la variable */
/*al poner las ="" en el constructor le doy un valorx defecto */
let listaLibro = [];

class Libro {
	constructor(titulo = "", autor = "", edicion, tematica, precio = 0) {
		this.titulo = titulo;

		this.autor = autor;

		this.edicion = Libro.generarRandomAlfanumerico();

		this.precio = Libro.generarPrecio();

		this.tematica = [
			Libro.generarRandomAlfanumerico(),
			Libro.generarRandomAlfanumerico(),
		];

		listaLibro.push(this);

		this.imprimeLibroTabla();
	}
	imprimeLibroTabla() {
		let tbody = document.getElementById("tbody1");

		let row_2 = document.createElement("tr");
		let row_2_data_1 = document.createElement("td");
		row_2_data_1.innerHTML = this.titulo;
		let row_2_data_2 = document.createElement("td");
		row_2_data_2.innerHTML = this.autor;
		let row_2_data_3 = document.createElement("td");
		row_2_data_3.innerHTML = Libro.generarRandomAlfanumerico();
		let row_2_data_4 = document.createElement("td");
		row_2_data_4.innerHTML = Libro.generarPrecio();
		let row_2_data_5 = document.createElement("td");
		row_2_data_5.innerHTML = this.generarTematica();
		let row_2_data_6 = document.createElement("button");
		row_2_data_6.innerHTML = "remove";

		row_2.appendChild(row_2_data_1);
		row_2.appendChild(row_2_data_2);
		row_2.appendChild(row_2_data_3);
		row_2.appendChild(row_2_data_4);
		row_2.appendChild(row_2_data_5);
		row_2.appendChild(row_2_data_6);
		tbody.appendChild(row_2);

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
	generarTematica() {
		let acumulador = "";
		for (var i = 0; i < this.tematica.length; i++) {
			acumulador += this.tematica[i] + ", ";
		}
		return acumulador.slice(0, -2);
	}
}
new Libro("libro1", "autor1");
new Libro("libro2", "autor2");
new Libro("libro3", "autor3");
new Libro("libro4", "autor4");
new Libro("libro5", "autor5");
new Libro("libro6", "autor6");
new Libro("libro7", "autor7");
new Libro("libro8", "autor8");
new Libro("libro9", "autor9");
new Libro("libro10", "autor10");

console.table(listaLibro);
/*Acceder a la tabla y buscar los parametros */
console.log(listaLibro[0].autor);
console.log(listaLibro[1].tematica);
console.log(listaLibro[4].edicion);

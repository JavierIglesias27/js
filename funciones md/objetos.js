/*QUIERO GUARDAR LAS PERSONAS EN UNA LISTA */
let listaPersonas = [];
console.log(listaPersonas);

class persona {
	constructor(name) {
		this.nombre = name;
		this.dni = Car.generarMatricula();
		listaPersonas.push(this);
	}
}

/*hago un aplantilla xa luego crear modelo, marca*/
class Car {
	constructor(marca, propietario) {
		this.brand = marca;
		this.propietario = propietario;
		this.matricula = Car.generarMatricula();
		this.pasajeros = [];
	}
	/* para indicar q solo añade()hace una cosa*/
	getShow() {
		if (this.brand == "Seat") {
			return "es una marca no aceptada";
		} else {
			return this.brand + " " + this.matricula;
		}
	}
	static generarMatricula() {
		return Math.floor(Math.random() * (9999 + 1 - 1000) + 1000);
	}
	addPasajeros(pasajero) {
		this.pasajeros.push(pasajero); // aqui lo añado
	}
	removePasajeros(pasajero) {
		this.pasajeros.remove(pasajero); //  lo elimino pasajero
	}
	/*  set= que añade y quita cosas */
	// setPasajeros(pasajero) {
	// 	if (this.pasajeros.includes(pasajero)) {
	// 		this.pasajeros.remove(pasajero); // si esta el pasajero lo elimino
	// 	} else {
	// 		this.pasajeros.push(pasajero); // aqui lo añado
	// 	}
	// }
	/*COGEMOS UN OBJETO DE JS Y LO PASAMOS A JSON*/
	printJSON() {
		return JSON.stringify.this;
	}
	tabla() {
		//console.table(this);
		//para crear la tabla a tu manera
		console.table([[this.brand], [this.propietario, this.propietario.nombre]]);
	}
}

let persona1 = new persona("juan");
let persona2 = new persona("Pedro");
let persona3 = new persona("Andres");

let coche1 = new Car(
	"Seat",
	persona1
); /*estoy creando el coche de marca seat y su matricula */
let coche2 = new Car(
	"Ford",
	persona2
); /*estoy creando el coche de marca seat y su matricula */
let coche3 = new Car(
	"Audi",
	persona3
); /*estoy creando el coche de marca seat y su matricula */

coche1.addPasajeros(persona1);
coche1.addPasajeros(persona2);
console.log(coche1.pasajeros);
console.log(coche1.printJSON()); /**covierte a  formato JSON y lo printeA */
console.log(coche1); /* DA DATOS DEL COCHE 1 */
coche1.tabla(); /*me lo printea en tabla */

// console.log(coche1.brand + " " + coche1.matricula);
// console.log(coche2.brand + " " + coche2.matricula);
// console.log(coche3.brand + " " + coche3.matricula);

console.log(coche1.getShow());
console.log(coche2.getShow());
console.log(coche3.getShow());

console.log(persona1);
console.log(persona2);
console.log(persona3);

/**AÑADIMOS A LA FUNCIO COCHE PROPIETARIO ARRIBA */
/*hay q poner las funciones en orden xa q carguen bien */

console.log(coche1.propietario.nombre);
console.log(coche2.propietario.nombre);
console.log(coche3.propietario.nombre);

/*queremos meter pasajeros dentro del coche */

// CREAMOS FUNCION ADDPASAJEROS

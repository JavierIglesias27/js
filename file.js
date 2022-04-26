document.getElementById("nombre").style.backgroundColor = "#ffffff";

document.getElementById("nombre").innerHTML = "asd";

/* este sustituye todo el contenido del ID nombre por ASD */

document.getElementById("nombre").innerHTML += "asd";

/* este añade al contenido del ID nombre por ASD quedaria holaaaa que tal ASD */

document.getElementByClassName("nombre");

document.getElementByName("nombre");

document.getElementByTagName("h1")[0].innerHTML = "AAA";

/*diferenciar diferentes  class*/

//<p class="asd"> holaaaaaaa<p/>

//<p class="asd"> adios<p/>

console.log; //veo la posicion que ocupa

console.log(document.getElementByClassName("asd"));

document.getElementByClassName("asd")[0].style.backgroundColor = "blue";

/*para saber cuando elementos hay en [] se usa lenght*/

let cantidad = console.log(document.getElementByClassName("asd").lenght);

for (let $i = 0; $i > $cantidad; $i++) {
	document.getElementById("asd")[i].style.backgroundColor = "green";
	console.log("$i" + $i);
}

/* tenemos  style=  . rojo {backgroundcolor="red"} y queremos modificarla */
/*<h1> hola </h1> */

document.getElementByTagName("h1")[2].classList.add = "rojo"; // se cambia fondo a rojo

/*<h2 class= "green"></h2>  y   quiero e   eliminarla*/

document.getElementByTagName("h1")[2].classList.remove = "green";

/* creamos style= .azul { backgroundcolor="blue";} */

/*<p> pppppppppppppp</p> */
/*<h2> pppppppppppppp</h2> */

document.getElementByTagName("p")[0].classList.add = "rojo";
document.getElementByTagName("h2")[1].classList.add = "rojo";
/*cambio la h2 de rojo a azul */
document.getElementByTagName("h2")[1].classList.replace("rojo", "azul");

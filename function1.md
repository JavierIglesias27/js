# FUNCIONES BÁSICAS TEXTO/NUM

- `windows.print()`imprimir directamente a impresora

- `$text.slice(2 , 8)` es para acotar entre los numeros 2,3,4,5,6,7,8 y admás puedes aplicar números negativos

- `txt.substring(2,8)` igual al slice pero no aceota negativos y e smenos costoso informaticamente

- `text.replace("texto1", "texto2)` para cambiar texto porotro pero deben ser identicos

- `text.concat("X X, txt)` para concatenar

- `var1.trim()` limpia espacios por delnate y detras de la

- `$var.padStart`para insertar letras delante de todo

- `$var.pasEnd` para insertar letra al final

- `$var1.charAt(2)` selecionas una posicion enconcreto

- `$var1.charCodeAt(2)` posicion concreta en la lista UTF-8

- `texto.split(" ")` te divide en texto por palabras p.e

- `texto.split(" ")[1]` muestra la palabra ubicada en esa posicion

- `texto.indexOf("p")` te da la posicion que ocupa

- `texto.lastIndexOf("p")`igual q el anterior desde el final

- `texto.match(" ")`es si existe la palabra en la y te la printea

- `texto.includes("juan")` devuele true si existe o false en caso contrario

- `texto,starstWith("the")` devuelve true en consola si existe o flase en caso contrario

- `texto.toString(10)` recorta la cadena al número que le indicas

- `$texto4.trim().toLocaleLowerCase().startsWith("the");` lo conviertes a minusculas y te lo encuentra siempre

# atributos para llamar a JS(lista de eventos)

[JLista completa de eventos](https://www.elated.com/events-and-event-handlers/)

- `onclick= "fun1()"`--> al tocar el boton se pone de un color determinado

- `onmouseover="fun2()"`--> al ponerte encima del boton se pone el elemnto en rojo() NO el BOTON sino la linea q afecta.

- `onmouseout="fun3()" `--> al ponerte encima del boton Y mover le mouse se cambia de color.(al salir del boton se cambia no al estar encima)

- `onkeyup` te cuenta cada vez q tocas la letra y levanta.
  p.e "abc" te contaría 12 para la a 34 para la b y 56 para c
  p.e si"aaaaa" sin soltar el boton serían solo 2

# ARRAYS

- `let array = new Array();` este MEJOR es el nuevo--> se redimensiona solo Y SUMA ENTRE +1 Y +16
- `let array1 = ["", ""];` este es primitivo--problema esta limitado a maximo de filas y te puedes quedar sin espacio en MEMORIA RAM Y TE MULTIPLICA \* 2

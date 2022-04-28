# REPOSITORIO

## JS EN HEAD

`<script>XA IMPORTAR ALGUN DOCUMENTO </script> `

## JS EN BODY

`<script> XA CODIGO INTERNO DEL ACHIVO </SCRIPT>`

## IMPORTAR ARCHIVOS DESDE JS(SIEMPRE DENTRO HEAD)

`NOTA: SE DEBERA HACER UN SCRIPT PARA HTML, CSS...`

```
<head>
    <script defer src="./file.js"></script>
</head>

<body>
    <p id="nombre"> texto escrito en negrita</p>
    <script>
        //SOLO XA PRUEBAS
        //si voy a ejecutar esto puedo hacerlo directamente AQUI!!!
        //console.log /warm/error...
        //alert
        //document.write
    </script>

</body>
```

# Atributos que se pueden añadir al importa JS

- `<script src="./file.js">` tal y como llegue el documento se ejecutara.

- `<script async src="./file.js">` slipear(se queda en stand by) es decir espera a tener el script y luego empieza a cargar el body--> PROBLEMA: si p.e hay una imagen q no se ejecuta NO se CARGARA NUNCA.

- `<script defer src="./file.js">` IGUAL Q EL ASYNC xo permite que todo lo demas se vaya cargando y lo ultimo es el script.

- `<script async defer src="./file.js">` primero hace el asign y luego el defer.

# COMO SELECCIONAR ID, Class, all DESDE JS

- `document` hace referencia a todo lo q hay en body`

`document.getElementById("nombre")`--> seleccionamos los ID del HTML.

- `document.getElementByClassName("asd")`--> seleccionamos los class del HTML.
  p.e te deja añadir tantas clases como quieras. getElementByClassName("negra rojo azul")

- `document.getElementByName ("juan")`--> seleccionamos los name del HTML.

- `document.getElementByTagName ("h1")`--> seleccionamos directamente etiquetas del HTML.

- `document.getElementById("nombre").innerHTML = "asd";` --> cambia el contenido etiqueta "p" x escribe ASD.

`document.getElementById("nombre").innerHTML += "asd";` añade ASD al contenido de la etiqueta "p".

## Acceder a otro link-carpetas-subcarpetas

Crear links/carpetas/subcarpetas y acceder directamente

- [JS](./js1.html)

- [bienvenido a google](https://www.google.es/)

## Ejemplo de lista/tablas en Markdown

[ejemplosmarkdown](https://markdownlivepreview.com/)

## Console

Para lanzar las comprobaciones, contenido del div, variables q contengan texto...

- `console.log("xxxxx");`

- `console.error("fallooooooo");`

- `console.info("INFOOOO");`

- `console.warn("WARNNNNNNN");`

- `\n salto de linea(carro) `

- `\t son tabulaciones `

- `\v crea un tab vertical`

- `\r es otra manera de hacer salto de linea y tmb xa que se coloque al principio de linea`

- `\b crea un espacio`

- `\f crea un avance en el form`

- `\` `escape para que printee `

- ` `\\`escape pra que printee `

- `console.log(typeof(var1);` es el equivalente al vardump del php xa saber que tipo de salidas tiene la funciÓn typeof= number, string, float, undefined, NaN, boolean,infinito, matrices[1,8,7,], objetos{}

## Funciones

- `alert()` Mostrar mensaje

- `document.write()`Imprimir en pantalla

- `prompt()` Solicitar datos al usuario

- `parseint()` Convertir a string y coge el primer integro

- `parseFloat`Convertir texto a numero sdecimales

- `toUpperCase()` Transformar texto en mayúsculas

- `toLowerCase()`transformar texto en minúsculas

- `if(%2==0){} ` Indicar numeros pares(módulo)

- `if(%2==1){} ` Indicar numeros impares(módulo)

- `toPrecision(2) `Redondear a dos/tres decimales..

- `typeof()` función para saber el tipo de variable--> string, float...

- `valueOf()` función para saber el tipo de variable--> string, float...

`IMPORTANTE!!!Las funciones distinguen entre mayúsculas y minúsculas`

## Propiedades

- `lenght`para saber el numero de elementos que tiene un array p.e.

- `1e1` RECORDAR que "e" es un número

- `MAX_VALUE` Valor maximo

- `MIN_VALUE` Valor minimo

- `POSITIVE_INFINITY` Solo valores positivos

- `NEGATIVE_INFINITY` solo valores negativos

# Tipos de Variables

    1. PRIMITIVAS:

    	1.1 int (Números Enteros)

    	1.2 float (Números con decimales)

    	1.3 string (Texto)

    	1.4 boolean (True/False: 1/0)

    2. NUEVAS VARIABLES(La primera letra en mayúsculas)

    	2.1 Int

    	2.2 String

    	2.3 Boolean

    	2.4 Float

    3. GLOBALES/CONSTANTES

    	3.1 _var2 ~ const_var2 ()  empiezan por _nombre

    	3.2 _PI = 3.141615

    	3.3 _RA = Número semejante a PI

    	3.4 new Number : Transforma el texto en número es equivalente a la funcion parseInt.

    	3.5 new String: Transforma el contenido a texto.

    	3.6 new Date("2020-01-16"): Para calcular la fecha de hoy

`NOTA: Las variables distinguen entre mayúsculas y minúsculas`

# Operadores Básicos

- `+ sirve para concatenar y sumar`

- `- restar`

- `/ dividir`

- `* multiplicar`

- `++ sirve para sumar uno a la variable var++= var +1`

- `-- sirve para restar uno a la variable var--= var - 1`

- `** sirve para hacer exponente`

- `let var= 8 ** 2;`

- `console.log($var7);`

- `% es un modulo`

# Bucles

`if(condiciones){ejecucion}`

```
let $cantidad=(7, 8 , 98, 456 )
if($i=0; $i<=$cantidad;i++){
	document.write("lista <br />" + $cantidad)
}
```

`fuction cosa(parametro){ejecucuion}`

`array []`

```
let coches= ["BMW","Ferrari","Audi"]
```

` for(condicion){ejecución}`

```
let $cantidad = $car.matriculas.length;
document.write("NUMERO ELEMENTOS ARRAY: " + $cantidad);
document.write("<br />");

	for (let $i = 0; $i < $cantidad; $i++) {
	document.write($car.matriculas[$i] + "<br />");
			}
```

`WHILE`

```
let $cantidad1 = $car.matriculas.length;
let i = 0;
while (i < $cantidad1)
{ document.write($car.matriculas[i] + "<br />"); i++; }

```

`DO WHILE `
`se ejecuta una vez y hasta q no se cumpla no pasa`
let numero ;
do{
numero= prompt("Introduce un número");
}
while(isNaN(numero))
document.write(nume

# tipos de condiciones de los bucles

- `=` le asigna un valor especificos 1=1

- `1==1` compara que uno sea igual al otro

- `1!=1` dice que sean diferentes

- `3 >=1`mayor o igual

- `*1 <=3` mayor o igual

- `3 > 2` estrictamente mayor

- ` 1 < 3` estrictamente menor

- `1 === 1` estrictamente igual le haces q 1 tome el valor de 1 y no de true-->es importante al comparar bite a bite 0000100

- `1==1´ te pondria 00true00 y seria una ERROR!

- `1!=== 1` es estrictamente diferentes

- `1 ? 1` operador ternario sirve xa hacer un if mas concentrado --> esto es IF + ELSE

- `if(3==5)` {console.log("asd")} else {console.log("jkf")}

- `3==5?consoloe.log("asd"): consoloe.log("jkl");`

- `if(3==5) {console.log("asd");`

- `3==5?consoloe.log("asd");`

- `if(!3==3){console.log("asd")}`--> esto NUNCA se cumpliria

- `if (3==3 && 5==3){console.log("asd"}`--> esto NUNCA se cumpliarÍa.

- `if (3==3 ||5==3){console.log("asd"}`--> esta se cumplirÍa uno o otro`

# operadores 2 grado

- `=` --> `let var=8;`

- `+=` --> `let var+=3; resultad 8+3=11`

- `-=` --> `let var-=3; resultad 8-3=5`

- `*=` --> `5*=5 es igual 5*5*5*5\*5=3125`

- `/=`

- `%` --> `modulos p.e 2%2 devuelve 0`

```ejemplo:
			3 % 2 devuelve 1
			let $var=2;
			$varasd %= 3;
			console.log($varasd);
```

- `**=` --> `exponencial`

# Orden de Lógico de los operadores matemáticos

1.  `() y []`

2.  `* y /`

3.  `+ y -`

4.  `&&`

5.  `||`

# Otros operadores

- `&` AND

- `|` OR

- `~`NOT

- `^`XOR

- `<<` LEFT

- `>>` RIGHT

- `>>>` UNSIGNED RIGHT SHIFT

```
		console.log (0101 >>> 1); Comparaciones en código en binario.
		console.log (5 >>> 1); el 0101 es el valor 5 en binario y te dice la posición q ocupa.

```

# forma de llamar a JS por parte del usuario( cuando el usuario haga click se llamara)

- <button onclick="alert();"> click boton</button>
- <button onblue= >el click al salir del objeto(cambia r de pantalla) ya no puedes volver hacia atras te daría error button>

# NOTA PROBLEMA JS

` PRIMER PROBLEMA`

```
		let var1= 1 + 5 +"texto" --> aqui suma 1+5 y concatena texto
		console.log("var1")
```

`SEGUNDO PROBLEMA`

```
	let var1= "texto" + 1 + 5 +--> aqui detecta texto y no suma
	console.log("var1")
```

# DIFERENCIA LET Y VAR

## Ejemplo LET

```
let $var1= 1;
$var1=2;

`CREAMOS FUNCION`
function cosa1(){ $var1=2}
cosa1(); --> llamo a la funcion sin pasar parametro y resultado=2
console.log(var1);
```

## Ejemplo VAR

```
var $var2= 1; $var2=2;

`CREAMOS FUNCION`
function cosa2(){ $var2=5}
cosa2();--> llamo a la funcion sin pasar parametro y resultado=2
console.log(var1);
```

### OJO!! Al declarar la función

`Dentro de la funcion UTILIZAR SIEMPRE let /var me afecta solo dentro de la funcion`

`Y FUERA puedes usar $ , LET, VAR Y CONST _`

` VAR se extralimita se puede llamar fuera de la funcion declarada/NOdeclarada`

`LET solo se puede llamar dentro de la funcion declarada/ NO declarada y es BUENO XQ SOLO AFECTA ALA FUNCION que se ejecuta.`

## EJEMPLO LET /VAR

```
function run() {
var foo ="foo"
let bar ="Bar"
console.log (foo, bar);

{
var moo ="Mooo"
let baz ="Bazz"
console.log (moo, baz);
}
console.log(moo);
console.log(baz);error!!!
}
run();
```

# DIFENCIA ENTRE:

1. ` FUNCION NO DECLARADA: es una funcion que no hace falta definirla xq se va a ejecutar siempre.`
2. ` FUNCION NDECLARADA: hace falta definirla/llamarla xa que se ejecute.`

# OBJETOS

### claudator {} indica q son objetos

1. `ACCEEDER : document.write($car.type);`

2. `ACCEDER 2 : document.write($car["type"]);`

### TIPOS DE OBJETOS

` tipos de objetos mas comunesJSON{}`

# CREAR BUTTON

# Tocar el boton la etiqueta/s "p" se cambiar de color UNA SOLA VEZ!!

```
<head>
<style>
	.rojo{
		backgroundcolor:red;
	}
	.green {
		backgroundcolor:green;
	}
</style>
</head>
<body>
<h5>REPLACE [1] de rojo a verde</h5>

<p>PRIMER TEXTO</p>
<p>SEGUNDO TEXTO</p>

<script>
	function cosas1() {
		document.getElementsByTagName("p")[12].classList.add("rojo");
		document.getElementsByTagName("p")[13].classList.add("rojo"); // lo pone primero rojo (aunque no se vea)
		document
			.getElementsByTagName("p")[13]
			.classList.replace("rojo", "green"); //(Luego lo cambia a verde)
	}
</script>
<button onclick="cosas1()">replace red to green</button>

</body>
```

# SI QUEREMOS Q CAMBIE CADA VEZ Q TOCAS EL BUTTON

```
<head>
	<style>
	.rojo{
		backgroundcolor:red;
	}
	.azul{
		backgroundcolor:azul;
	}

	</style>
</head>

<body>
	<p>PRIMER TEXTO</p>
	<p>SEGUNDO TEXTO</p>

		<script>
			document.getElementsByTagName("p")[0].classList.add("rojo");
			document.getElementsByTagName("p")[1].classList.add("rojo");
			let $a = 0;
			let $text = document.getElementsByTagName("p")[0];
			let $text1 = document.getElementsByTagName("p")[1];
			function replacecolor() {
				$a++;
				if ($a % 2 == 0) {
					$text.classList.replace("rojo", "azul");
					$text1.classList.replace("rojo", "azul");

				} else {
					$text.classList.replace("azul", "rojo");
					$text1.classList.replace("azul", "rojo");
				}
			}
		</script>
		<button onclick="replacecolor()">REPLACE AL CLICK</button>
</body>
```

# Panel de colores y al tocar el boton enviar te de el valor del panel de control(SOLUCIÓN 1)

```
<h1>Panel de color y al tocar el boton enviar value</h1>
	<form action="#" method="get" target="_blank">
		<fieldset>
			<input type="color" name="color" />

			<button
				onclick="replacecolor2(document.getElementsByTagName('color').value)"
			>
				sendcolor
			</button>
			<script>
				function replacecolor2(color) {
					consol.log(color);
				}
			</script>
		</fieldset>
	</form>
```

# Panel de color + enviar valor (SOLUCIÓN 2 + CORRECTA)

```

<input type="color" name="color">
<button  onclick ="replacecolor3(document.getElementByTagName('color').value, this)">sendcolor</button>

<script>
function replacecolor3(color, button) {
consol.log(color);
button.style.backgroundcolor=color;
}
<script>
```

# tocar el button se cambie el color del boton y coincida con el panel de color.

```
<h1>que se ponga el button rojo</h1>
		<form action="#" method="#" target="#">
			<fieldset>
				<input type="color" id="color" />
				<button
					onclick="replacecolor3(document.getElementById('color').value, this)"
				>
					sendcolor
				</button>

				<script>
					function replacecolor3(color, button) {
						console.log(color);
						button.style.backgroundColor = color;
					}
				</script>
			</fieldset>
		</form>
	</body>
</html>
```

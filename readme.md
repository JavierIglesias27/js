# REPOSITORIO

## JS EN HEAD

`<script>XA IMPORTAR ALGUN DOCUMENTO </script> `

## JS EN BODY

`<script> XA CODIGO INTERNO DEL ACHIVO </SCRIPT>`

# IMPORTAR ARCHIVOS DESDE JS(SIEMPRE DENTRO HEAD)

`NOTA: SE DEBERA HACER UN SCRIPT PARA HTML, CSS...`

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

<body>

### atributos que se pueden añadir al importa JS

` <script src="./file.js"> tal y como llegue el documento se ejecutara`

`<script async src="./file.js"> slipear(se queda en stand by) es decir espera a tener el script y luego empieza a cargar el body--> PROBLEMA: si p.e hay una imagen q no se ejecuta NO se CARGARA NUNCA`

`<script defer src="./file.js"> IGUAL Q EL ASYNC xo permite que todo lo demas se vaya cargando y lo ultimo es el script`

`<script async defer src="./file.js"> primero hace el asign y luego el defer`

# COMO SELECCIONAR ID, Class, all DESDE JS

`archivo file.js`

`document hace referencia a todo lo q hay en body`

`document.getElementById("nombre")--> seleccionamos todos los ID del HTML`

`document.getElementByClassName("asd")--> seleccionamos todos las class del HTML`

`document.getElementByName ("juan")--> seleccionamos todos los name del HTML `

`document.getElementByTagName ("h1")--> seleccionamos directamente etiquetas del HTML `

`<p id ="nombre" class="asd" name="juan"> holaaaaaaaque tal</p>`

`document.getElementById("nombre").innerHTML = "asd"; --> cambia el contenido p x ASD`

`document.getElementById("nombre").innerHTML += "asd"; añade ASD al holaaa qtal`

<script>
    document.get 
</script>

## Acceder a otro link-carpetas-subcarpetas

Crear links/carpetas/subcarpetas y acceder directamente

[JS](./js1.html)
[bienvenido a google](https://www.google.es/)

## Ejemplo de lista/tablas en Markdown

[ejemplosmarkdown](https://markdownlivepreview.com/)

## Console

Para lanzar las comprobaciones, contenido del div, variables q contengan texto...

`console.log("xxxxx");`

`console.error("fallooooooo");`

`console.info("INFOOOO");`

`console.warn("WARNNNNNNN");`

`\n salto de linea(carro) `

`\t son tabulaciones `

`\v crea un tab vertical`

`\r es otra manera de hacer salto de linea y tmb xa que se coloque al principio de linea`

`\b crea un espacio`

`\f crea un avance en el form`

` \``escape para que printee `

` `\\`escape pra que printee `

`console.log(typeof(var1)); es el equivalente al vardump del php xa saber que tipo de salidas tiene la vfuncion typeof= number, string, float, undefined, NaN, boolean,infinito, matrices[1,8,7,], objetos{}`

` tipos de objetos mas comunesJSON{}`

`write.document(typeof(var1));`

## Funciones

`IMPORTANTE!!!Las funciones distinguen entre mayúsculas y minúsculas`

`alert()`-->mostrar mensaje

`document.write()`para imprimir en pantalla

`prompt()` sirve para solicitar datos al usuario

`parseint()` para convertir a string y coge el primer integro

`parseFloat`para convertir texto a numero sdecimales

`toUpperCase()` para poner texto en mayúsculas

`toLowerCase()` para poner texto en minúsculas

`if(%2==0){} ` para indicar numeros pares(modulo)

`if(%2==1){} ` para indicar numeros impares(modulo)

`toPrecision(2) `para redondear a dos decimales /tres decimales...

`typeof()` funcionn para saber el tipo de variable--> string, float...

`valueOf()` funcionn para saber el tipo de variable--> string, float...

## Propiedades

`lenght`para saber el numero de elementos que tiene un array p.e.

`1e1` RECORDAR que "e" es un número

`MAX_VALUE` Valor maximo

`MIN_VALUE` Valor minimo

`POSITIVE_INFINITY` Solo valores positivos

`NEGATIVE_INFINITY` solo valores negativos

# Tipos de variables

`PRIMITIVAS: int(numeros enteros), float( numeros con decimales),string(texto) , boolean(True/false)`

`NUEVAS VARIABLES: tienen las primera letra en mayusculas, NO las usaremos de momentos `
`Int, String, Boolean, Float`

`let var7=25 TODAS LAS VARIABLES EN JS SON DEL TIPO LET Y SE PONE SOLO AL CREARLAS`

`_var2 = global_var2 _variables globales : son las que emepiezan por _`

` _var2 = const_var2 es lo mismo variables global`

`_PI = 3,1416...ejemplo de variable global`

`_RA = variable parecida a PI`

`IMPORTANTE!!!Las variables distinguen entre mayúsculas y minúsculas`

`new Number("6")` transforma el texto en numero es equivalente al parseInt

`new String`tranformar a texto

`new Date("2020-01-16")` para calcular la fecha de hoy

# operadores basicos

`+ sirve para concatenar y sumar`

`- restar`

`/ dividir`

`* multiplicar`

`++ sirve para sumar uno a la variable var++= var +1`

`-- sirve para restar uno a la variable var--= var - 1`

`** sirve para hacer exponente`

`let var= 8 ** 2;`

`console.log($var7);`

`% es un modulo`

# bucles

`if(condiciones){ejecucion}`

`fuction cosa(parametro){ejecucuion}`

`array []`

# tipos de condiciones de los bucles

`= le asigna un valor especificos 1=1`

`1==1 compara que uno sea igual al otro`

`1!=1 dice que sean diferentes`

` 3 >=1 mayor o igual`

` 1 <=3 mayor o igual`

`3 > 2 estrictamente mayor`

` 1 < 3 estrictamente menor`

`1 === 1 estrictamente igual le haces q 1 tome el valor de 1 y no de true`
`es importante al comparar bite a bite 0000100 `

`1==1 te pondria 00true00 y seria una ERROR!`

`1!=== 1 es estrictamente diferentes`

`1 ? 1 operador ternario sirve xa hacer un if mas concentrado`
`esto es IF + ELSE`

if(3==5) {console.log("asd")} else {console.log("jkf")}

3==5?consoloe.log("asd"): consoloe.log("jkl");

`este es IF solo`

if(3==5) {console.log("asd");

3==5?consoloe.log("asd");

`if(!3==3){console.log("asd")}`esto no se cumpliria

`if (3==3 && 5==3){console.log("asd"}` esto NO se cumpliaria nunca

`if (3==3 ||5==3){console.log("asd"}` esta se cumpliria uno o otro

# operadores 2 grado

`=` let var=8;

`+=` let var+=3; resultad 8+3=11

`-=` let var-=3; resultad 8-3=5

`*=` 5*=5 es igual 5*5*5*5\*5=3125

`/=`

`%=` modulos p.e 2%2 devuelve 0

modulo p.e 3 % 2 devuelve 1
let $var=2;
$varasd %= 3;
console.log($varasd);

`**=` exponencial

# orden de operadores matemáticos

`() y []`

`* y /`

`+ y -`

`&&`

`||`

# otros operadores

`&` AND

`|` OR

`~`NOT

`^`XOR

`<<` LEFT

`>>` RIGHT

`>>>` UNSIGNED RIGHT SHIFT

console.log (0101 >>> 1); Para hacer comparaciones en codigo en binario
console.log (5 >>> 1); el 0101 es el valor 5 en binario y te dice la posicion q ocupa

# forma de llamar a JS por parte del usuario( cuando el usuario haga click se llamara)

<button onclick="alert();"> al clickar en el en boton

<button onblue=>

# NOTA PROBLEMA JS

let var1= 1 + 5 +"texto" --> aqui suma 1+5 y concatena texto
console.log("var1")

let var1= "texto" + 1 + 5 +--> aqui detecta texto y no suma
console.log("var1")

# DIFERENCIA LET Y VAR

let $var1= 1; 
$var1=2;

`CREAMOS FUNCION`
function cosa1(){ $var1=2}
cosa1(); --> llamo a la funcion sin pasar parametro y resultado=2
console.log(var1);

var $var2= 1; $var2=2;

`CREAMOS FUNCION`
function cosa2(){ $var2=5}
cosa2();--> llamo a la funcion sin pasar parametro y resultado=2
console.log(var1);

`variable total`--> NO SE PUEDE REDEFINIR UNA VARIABLE CONSTANTE`

const_PI =3.1416
`_PI=2;`
`console.log(_PI);`

### IMPORTANTE A LA HORA DE DECLARAR LA VARIABLE

`Dentro de la funcion UTILIZAR SIEMPRE let /var me afecta solo dentro de la funcion`

`Y FUERA puedes usar $ , LET, VAR Y CONST _`

## EJEMPLO LET /VAR

function run() {
var foo ="foo"
let bar ="Bar"
console.log (foo, bar);
` FUNCION NO DECLARADA:esto de aqui es una funcion que no hace falta definirla xq se va a ejecutar siempre`
` VAR se extralimita se puede llamar fuera de la funcion NO declaradas`
`LET solo se puede llamar dentro de la funcion NO declarada y es BUENO XQ SOLO AFECTA ALA FUNCION DECLARADA xq solo se ejecuta una vez`
{
var moo ="Mooo"
let baz ="Bazz"
console.log (moo, baz);
}
console.log(moo);
console.log(baz);error!!!
}
run();

# OBJETOS

### claudator {} indica q son objetos

`ACCEEDER : document.write($car.type);`

`ACCEDER 2 : document.write($car["type"]);`

# TIPOS DE FUNCIONES

## FOR(){}

```let $cantidad = $car.matriculas.length;
			document.write("NUMERO ELEMENTOS ARRAY:   " + $cantidad);
			document.write("<br />");
			for (let $i = 0; $i < $cantidad; $i++) {
				document.write($car.matriculas[$i] + "<br />");
			}
```

## WHILE

```
let $cantidad1 = $car.matriculas.length; let i = 0; while (i < $cantidad1) { document.write($car.matriculas[i] + "<br />"); i++; }
```

`ÈN EL BUCLE FO PUEDES PONER`
document.write($car.matriculas[++] + "<br />");

## CREAR BUTTON

### al tocar el boton la etiqueta h2 se cmabiaran de UNA SOLA VEZ!!

<body>
<button onclick="cosas()"></button>
<p> pppppppppppppp</p> 
<h2> pppppppppppppp</h2>

<script>
    function cosas(){
        document.getElementByTagName("p")[0].classList.add = "rojo";
        document.getElementByTagName("h2")[1].classList.add = "rojo";
        /*cambio la h2 de rojo a azul */
        document.getElementByTagName("h2")[1].classList.replace("rojo", "azul");
    }
</script>
</body>

# SI QUEREMOS Q CAMBIE CADA VEZ Q TOCAS EL BUTTON

<body>

<p> pppppppppppppp</p> 
<h2> pppppppppppppp</h2>
<button onclick="replacecolor()"></button>
<script>
    let $a=0;
    let $text = document.GetElementsByTagname("p")[3];
    function replacecolor(){
        $a++;
        if($a % 2== 0){
            $text.classList.replace ("rojo","azul");

        }else {
            $text.classList.replace ("azul","rojo");
        }
    }

</script>
</body>

# crear un panel de colores y al tocar el boton enviar te de el valor del panel de control

<input type="color" id="color">
<button onclick ="replacecolor2(document.getElementByTagName('color').value)">sendcolor</button>

function replacecolor2(color) {
consol.log(color);
}

# SOLUCION MAS CORRECTA

<input type="color" name="color">
<button  onclick ="replacecolor3(document.getElementByTagName('color').value, this)">sendcolor</button>

<script>
function replacecolor2(color, button) {
consol.log(color);
button.style.backgroundcolor=color;
}
<script>
# al tocar el button se cambie el color del boton y coincida con el panel

<input type="color" name="color">
<button onclick ="replacecolor3(document.getElementByTagName('color').value)">sendcolor</button>

function replacecolor2(color) {
consol.log(color);
document.getElementByTagName('button')[0].style.backgroundcolor= color;
}

# CON ID al tocar el button se cambie el color del boton y coincida con el panel

<input type="color" id="color" value = "color">
<button  id ="boton" onclick ="replacecolor3(document.getElementByTagName('color').value)">sendcolor</button>
<script>
function replacecolor2(color) {
consol.log(color);
document.getElementById('boton').style.backgroundcolor= color;
}
<script>

# Repositorio de JS

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

`alert()`-->mostrar mensaje

`document.write()`para imprimir en pantalla

`prompt()` sirve para solicitar datos al usuario

`parseint()` para convertir a string y coge el primer integro

`toUpperCase()` para poner texto en mayúsculas

`toLowerCase()` para poner texto en minúsculas

`if(%2==0){} ` para indicar numeros pares(modulo)

`if(%2==1){} ` para indicar numeros impares(modulo)

# Tipos de variables

`PRIMITIVAS: int(numeros enteros), float( numeros con decimales),string(texto) , boolean(True/false)`

`NUEVAS VARIABLES: tienen las primera letra en mayusculas, NO las usaremos de momentos `
`Int, String, Boolean, Float`

`let var7=25 TODAS LAS VARIABLES EN JS SON DEL TIPO LET Y SE PONE SOLO AL CREARLAS`

`_var2 = global_var2 _variables globales : son las que emepiezan por _`

` _var2 = const_var2 es lo mismo variables global`

`_PI = 3,1416...ejemplo de variable global`

`_RA = variable parecida a PI`

# operadores basicos

`+ sirve para concatenar y sumar`

`- restar`

`/ dividir`

`* multiplicar`

`++ sirve para sumar uno a la variable var++= var +1`

`-- sirve para restar uno a la variable var--= var - 1`

`** sirve para hacer exponente`

`let var= 8 ** 2;`

`console.log($var7);'

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

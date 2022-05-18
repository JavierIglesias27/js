function ValidateCheck(campo, nombreCampoError) {
  elemento=document.getElementById("box")
	if( elemento.checked ) {
  console.log( "Terminos y condiciones aceptadas");
  alert( "Terminos y condiciones aceptadas");
}
else{
  "Debe Aceptar los terminos y condiciones de uso"
}
}

/*VALIDAR TODOS LOS CHECKSBOX */

/*
formulario = document.getElementById("formulario");
for(var i=0; i<formulario.elements.length; i++) {
  var elemento = formulario.elements[i];
  if(elemento.type == "checkbox") {
    if(!elemento.checked) {
      return false;
    }
  }
} 
*/
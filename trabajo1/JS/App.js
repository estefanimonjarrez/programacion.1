
function agregarDatos(){
    //Recolectar Informacion 
    let nombre =prompt('Ingresa tu nombre');
    let apellido =prompt('Ingresa tu apellido');
    let email=prompt('Ingresa tu email');
    let asunto=prompt('Ingrese tu asunto ');
    
     //Apuntar a la tabla creada a traves de un ID
let tabla = document.getElementById ('TablaPersonas');
//crear un nueva fila(tr)
let fila=""
  //asignar texto de las tablas
 fila+=`
 <tr><td>${nombre} </td><td>${apellido} </td><td>${email} </td><td>${asunto}</td></tr> `
 
 document.getElementById('tablaPersonas').innerHTML+=fila;
// asignar texto de las tablas
fila+=`
<table>input>${nombre}</table></input> ${apellido}</table></input> ${email}</table></input> ${asunto}</table></input> `
    document.getElementById('agregarDatos') 
    }
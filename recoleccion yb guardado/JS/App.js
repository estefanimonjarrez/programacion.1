function agregarDatos(){
//Recolectar Informacion 
let nombre =prompt('Ingresa tu Nombre');
let edad =prompt('Ingresa tu edad');
//Apuntar a la tabla creada a traves de un ID
let tabla = document.getElementById ('TablaPersonas');
//crear un nueva fila(tr)
let fila=""
  //asignar texto de las tablas
 fila+=`
 <tr><td>${nombre} </td><td>${edad}</td></tr>`
 document.getElementById('tablaPersonas').innerHTML+=fila;

 
}
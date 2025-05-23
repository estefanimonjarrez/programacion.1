let estudiantes = []; //declaramos el arreglo en ambiente global
window.onload = cargarDesdeLocalStorage;
function cargarArreglo() {
    //arreglo es un tipo de variable donde podemos almacenar valores
    //  multiplesnen en una misma variable
    let nombre = document.getElementById('nombre').value
    let identidad = document.getElementById('identidad').value
    let edad = document.getElementById('edad').value
    let carrera = document.getElementById('carrera').value
    if (nombre === '' || identidad === '' || edad === '' || carrera === '') {
        Swal.fire("Incirrecto");
        return
    }

    estudiantes.push([nombre, identidad, edad, carrera])
    guardarEnLocalStorage();
    console.log(estudiantes)
    document.getElementById('nombre').value = ''
    document.getElementById('identidad').value = ''
    document.getElementById('edad').value = ''
    document.getElementById('carrera').value = ''
    mostrarEstudiantes()

}
function mostrarEstudiantes() {
    let tabla = document.getElementById('mostrarEstudiantes')
    tabla.innerHTML = `
  <tr>
     <th width=30%>Nombre</th>
     <th width=25%>Identidad</th>
     <th width=20%>Edad</th>
     <th width=25%>Carrera</th>
  </tr>`;

    estudiantes.forEach((estudiantes, index) => {
        let fila = `
  <tr><td>${estudiantes[0]}</td><td>${estudiantes[1]}</td><td>${estudiantes[2]}
  </td><td>${estudiantes[3]}</td><td>`;
        tabla.innerHTML += fila
    })
}

function buscarEstudiante(){
    let busquedaId=document.getElementById('identidad').value;
    if (busquedaId===''){
        Swal.fire("Revise los campos");
        return;
    }
    let encontrado=estudiantes.find(est=>est[1]===busquedaId)
    if (encontrado){
        document.getElementById('nombre').value=encontrado[0]
        document.getElementById('edad').value=encontrado[2]
        document.getElementById('carrera').value=encontrado[3]
    } else{
        Swal.fire("EStudiante no encontrado");
    }
}

function actualizarEstudiante(){
    let nombreN = document.getElementById('nombre').value;
    let identidad = document.getElementById('identidad').value;
    let edadN = document.getElementById('edad').value;
    let carreraN = document.getElementById('carrera').value;
    if(identidad===''|| nombre===''|| edad===''|| carrera===''){
        Swal.fire("Debe llenar los campos");
        return;
    }
    let indice =estudiantes.findIndex(est=>est[1]===identidad);
    if(indice!==-1){
        estudiantes[indice]=[nombreN,identidad,edadN,carreraN];
        guardarEnLocalStorage();
        document.getElementById('nombre').value = ''
        document.getElementById('identidad').value = ''
        document.getElementById('edad').value = ''
        document.getElementById('carrera').value = ''
        mostrarEstudiantes()
        Swal.fire({
            title: "Este estudiante a sido actualizado correctamente",
            icon: "success",
            draggable: true
          });
    }else{
        Swal.fire("Estudiante no encontrado");
    }
    

}
function eliminarEstudiante(){
    let identidad = document.getElementById('identidad').value;
    if(identidad===''){
        Swal.fire("Debe llenar el campo de identidad");
        return;
    }
    let indice =estudiantes.findIndex(est=>est[1]===identidad);
    if(indice!==-1){
        estudiantes.splice(indice,1);
        document.getElementById('nombre').value = ''
        document.getElementById('identidad').value = ''
        document.getElementById('edad').value = ''
        document.getElementById('carrera').value = ''
        guardarEnLocalStorage();
        mostrarEstudiantes()
    
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "El estudiante a sido eliminado",
                    icon: "success"
                  });
                }
              });
        
    }else{
        Swal.fire("Estudiante no encontrado");
    }

}

function guardarEnLocalStorage() 
{
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}
function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("estudiantes");
    if (datosGuardados) {
        estudiantes = JSON.parse(datosGuardados);
        mostrarEstudiantes();
    }
}
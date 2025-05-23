let inventario = [];

// Función para cargar un nuevo producto en la tabla
function cargar() {
    let codigo = document.getElementById("codigo").value;
    let cliente = document.getElementById("cliente").value;
    let producto = document.getElementById("producto").value;
    let fecha = document.getElementById("fecha").value;
    let precio = document.getElementById("precio").value;

    if (codigo === "" || cliente === "" || producto === "" || fecha === "" || precio === "") {
        Swal.fire("Error", "Todos los campos son obligatorios", "error");
        return;
    }

    let item = { codigo, cliente, producto, fecha, precio };
    inventario.push(item);
    mostrarInventario();
    limpiarCampos();
    Swal.fire("Éxito", "Producto agregado correctamente", "success");
}

// Función para mostrar el inventario en la tabla
function mostrarInventario() {
    let tabla = document.getElementById("mostrarinventario").getElementsByTagName('tbody')[0];
    tabla.innerHTML = "";

    inventario.forEach((item, index) => {
        let row = tabla.insertRow();
        row.insertCell(0).textContent = item.cliente;
        row.insertCell(1).textContent = item.codigo;
        row.insertCell(2).textContent = item.producto;
        row.insertCell(3).textContent = item.fecha;
        row.insertCell(4).textContent = item.precio;
        row.insertCell(5).innerHTML = 
                                      ` <button onclick="eliminarventario(${index})">Eliminar</button>`;
    });
}

// Función para limpiar los campos después de agregar un producto
function limpiarCampos() {
    document.getElementById("codigo").value = "";
    document.getElementById("cliente").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("precio").value = "";
}

// Función para eliminar un producto del inventario
function eliminarventario(index) {
    Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            inventario.splice(index, 1);
            mostrarInventario();
            Swal.fire("Eliminado", "Producto eliminado correctamente", "success");
        }
    });
}

// Función para buscar un estudiante por código
function buscarEstudiante() {
    let codigo = document.getElementById("codigo").value;
    let encontrado = inventario.find(item => item.codigo === codigo);

    if (encontrado) {
        document.getElementById("cliente").value = encontrado.cliente;
        document.getElementById("producto").value = encontrado.producto;
        document.getElementById("fecha").value = encontrado.fecha;
        document.getElementById("precio").value = encontrado.precio;
    } else {
        Swal.fire("No encontrado", "El código ingresado no existe", "warning");
    }
}



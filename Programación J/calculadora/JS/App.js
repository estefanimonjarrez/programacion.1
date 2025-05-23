let valor1 //valor dos variables globales
let operacion
function uno() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 1

}

function dos() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 2
}

function tres() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 3
}

function cuatro() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 4
}

function suma(){
    valor1 = document.getElementById('pantalla').value
    operacion = "suma"
    document.getElementById('pantalla').value = 0
   
}


function resta() {
    valor1 = document.getElementById('pantalla').value
    operacion = "resta"
    document.getElementById('pantalla').value = 0
}

function multiplicar(){
    valor1 = document.getElementById('pantalla').value
    operacion = "multiplicar"
    document.getElementById('pantalla').value = 0

}

function division(){
    valor1 = document.getElementById('pantalla').value
    operacion = "division"
    document.getElementById('pantalla').value = 0

}


function igual() {
    if (operacion==='suma') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) + parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value
        
        Swal.fire({
            title: "Suma",
            text: "Buen Trabajo en su suma👌",
            icon: "question"
          });
        
    }
    else if (operacion === 'resta') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) - parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value
        Swal.fire({
            icon: "error",
            title: "Resta",
            text: "Esta malo😪",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }

    if (operacion==='multiplicar') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) * parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value
        Swal.fire({
            title: "Multiplicacion",
            text: "Vamos tu puedes con multiplicacion",
            icon: "question"
          });
    }

    else if (operacion==='division') {
        valor2 = document.getElementById('pantalla').value
        let total = parseInt(valor1) / parseInt(valor2)
        document.getElementById('pantalla').value = total
        valor1 = document.getElementById('pantalla').value

        Swal.fire({
            title: "division",
            text: "vamos tu puedes",
            imageUrl: "https://i.pinimg.com/originals/59/e0/d1/59e0d1bbfcdd133ae165d4f12940bc54.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    }


}


function cinco() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 5
}

function seis() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 6
}

function siete() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 7
}

function ocho() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 8
}

function nueve() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 9
}

function cero() {
    valor = document.getElementById('pantalla').value
    if (valor === "") {
        valor = 0
    }
    document.getElementById('pantalla').value = 10 * (parseInt(valor)) + 0
}
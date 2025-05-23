function limpiar (){
    document.getElementById('Numero1').value="";
    document.getElementById('Numero2').value="";

    document.getElementById('resultado').value="";
     
}
function calcular(){
let strNumero1=document.getElementById('Numero1').value;
let strNumero2=document.getElementById('Numero2').value;

document.getElementById('resultado').value=(parseInt(strNumero1)+parseInt(strNumero2));
}

function restar(){
    let strNumero1=document.getElementById('Numero1').value;
    let strNumero2=document.getElementById('Numero2').value;
    
    document.getElementById('resultado').value=(parseInt(strNumero1)-parseInt(strNumero2));
    }

    function dividir(){
        let strNumero1=document.getElementById('Numero1').value;
        let strNumero2=document.getElementById('Numero2').value;
        
        document.getElementById('resultado').value=(parseInt(strNumero1)/parseInt(strNumero2));
        }

        function multiplicar(){
            let strNumero1=document.getElementById('Numero1').value;
            let strNumero2=document.getElementById('Numero2').value;
            
            document.getElementById('resultado').value=(parseInt(strNumero1)*parseInt(strNumero2));
            }
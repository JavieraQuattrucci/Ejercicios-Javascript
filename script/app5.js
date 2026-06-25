// Cuenta el n de vocales de varias palabras
window.addEventListener("DOMContentLoaded", () => {

    const boton6 = document.getElementById('btnCallback');
    boton6.addEventListener('click', function() {

        const mensaje6 = document.getElementById("msj44");


        numValido = false;
        juegoCancelado= false;
        function ingresaNumero(callbackExito, callbackError){ 
            while(numValido==false && juegoCancelado ==false)
                {
                    var num = prompt("Ingresa un número");//el usuario ingresa el n 
                    if (num==null){
                        callbackError(num,'Juego Cancelado')
                        juegoCancelado = true;
                        break;                
                    }else
                        if (isNaN(parseFloat(num)) || parseFloat(num) <= 0){
                        callbackError(num,'Número Inválido')   
                    }else{
                        callbackExito(num)
                        numValido = true;
                    }
                }
            }

        function exito(n){
            console.log("BIEN! Número Válido");  
        }

        function error(n,tipo){
            if(tipo=='Número Inválido'){
                window.alert("Ingresa un número válido y mayor a 0");
                console.log("Ingresa un número válido y mayor a 0");
            }else
                if(tipo=="Juego Cancelado"){
                    console.log("Juego Terminado");
                }
            
        }


        ingresaNumero(exito, error);



        
});


})
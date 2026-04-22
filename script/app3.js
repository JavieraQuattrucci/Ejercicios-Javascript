// Adivino el numero
window.addEventListener("DOMContentLoaded", () => {
const boton3 = document.getElementById('btnAdivina');
  boton3.addEventListener('click', function() {

    const mensaje = document.getElementById("msj3");
    const secreto = Math.floor(Math.random() * 10) + 1;

    let lista=[]
    for(let i=0;i<3;i++){
        verificador=0;
        while(verificador==0){
            contador=i+1;
            var num = prompt("Intento número "+contador+" :");
            if (num == null) {// por si el usuario CANCELA
                console.log("Juego cancelado");
                i=3;
                verificador=1;
                break;
            }
            num = parseFloat(num);// parseo
            if(isNaN(num)){
                window.alert("Ingresa un número válido del 1 al 10");
                break;
            }
            if (num>10)
                {// si el numero es mayor a 10, ingresa otro sin perder el intento
                    window.alert("El número debe ser menor a 10");
                }
            else if(num<=0)
                {// si el numero es 0 o menos, ingresa otro sin perder el intento
                    window.alert("El número debe ser mayor a 0");
                }
            else{
                if(false==revisarLista(lista,num)){ //si el n nestá repetido, avisa sin perder el intento
                    window.alert("Ya elegiste este número");
                }
                else{ // si el número no está repetido...
                    if(num==secreto){// y si coincide con el n random
                        window.alert("¡BIEN, ADIVINIASTE! El número era: "+secreto);
                        verificador = 1; //lo saco del while 
                        i=3; //lo saco del for
                        break;//cierro el ciclo 
                    }else {
                        verificador = 1 //si no coincide, gastó el intento
                        if(i==2){
                            //si este era el último intento, avisa que perdió
                            window.alert("¡Perdiste! El número era: "+secreto);
                            
                        }
                    }                   
                }
            }
            
            
        }

    function revisarLista(lista,numero){
        if(lista.length===0){ //si la lista está vacía, ingresa el numero y termina la funcion
            lista.push(numero);
            return true;
        }
        for(let i=0;i<lista.length;i++){ //si ya hay numeros en la lista
            if (lista[i]==numero){      // si el n está repetido
                return false;           //retorna false
            }else if(i==(lista.length-1)&& [i]!=numero){
                lista.push(numero);     // si el numero no está
                return true;            //retorna true
            }
        }
    }

    function mostrarHistorial(lista) {
        mensaje.classList.remove("oculto");
        const contenedor = document.getElementById("ej3historial");
        contenedor.textContent = "Tu/s intento/s: " + lista.join(", ")+ " y la respuesta correcta era: "+secreto;
    }

     console.log(lista)
     mostrarHistorial(lista)


    }

        
});


})
// Cuenta el n de vocales de varias palabras
window.addEventListener("DOMContentLoaded", () => {
const boton4 = document.getElementById('btnVocales');
  boton4.addEventListener('click', function() {

    const mensaje4 = document.getElementById("msj4");
    const vocales = ['a','á','e','é','i','í','o','ó','u','ú']


    var cantValida = false;
    var juegoCancelado = false;

    cantPalabras = ingresarCantPalabras(cantValida,juegoCancelado)
    console.log(cantPalabras);
    lista = AgregarPalabrasLista();
    unidas = lista.join('');//junto las palabras
    console.log(unidas);
    total = contarVocales(unidas); 
    console.log("La cantidad de vocales contadas es: "+total);
    mostrarCantidadVocales(total);
    

    function contarVocales(unidas){ // cuento las vocales de un string 
        let total = 0;
        for(const x of unidas.toLowerCase()){
            if(vocales.includes(x)){
                total++;
            }
        }
        return total;
    }

    function mostrarCantidadVocales(total) {
        mensaje4.classList.remove("oculto");
        const contenedor = document.getElementById("ej4vocales");
        contenedor.textContent = "Ingresaste " + total+ " vocales en total";
    }

    function ingresarCantPalabras(cantValida,juegoCancelado){ //el usuario ingresa el n de palabras y creo validaciones
        while(cantValida==false && juegoCancelado ==false)
            {
                var cantPalabras = prompt("¿Cuántas palabras ingresarás?");
                if (cantPalabras==null){
                    console.log("Juego terminado");
                    juegoCancelado = true;
                    break;                
                }else
                    if (isNaN(parseFloat(cantPalabras)) || parseFloat(cantPalabras) <= 0){
                    window.alert("Ingresa un número válido y mayor a 0");
                    console.log("Ingresa un número válido y mayor a 0");
                }else{
                    return cantPalabras;
                }

            }
        }



    function AgregarPalabrasLista(){ //junto las palabras en una lista
            let listPalabras=[];
            let juegoCancelado = false;
            var palabraValida = false;
            for(let i=0;i<cantPalabras;i++){
                contador=i+1;
                palabraValida=false;
                while(palabraValida==false && juegoCancelado==false){
                    var palabra = prompt("Ingrese palabra n° "+contador+": ");
                    if(palabra==null){
                    console.log("Juego terminado");
                        i=cantPalabras+1;
                        juegoCancelado = true;
                        break;               
                    }
                    else if(palabra.length >= 1 && palabra.length <=30) //valido que la palabra no sea muy larga y tenga mínimo 1 caracter
                    {
                        listPalabras.push(palabra);
                        palabraValida = true;
                    }
                    else
                    {
                        console.log("Palabra inválida");
                        window.alert("Palabra inválida, prueba con otra");
                    }
                }
            }
            return listPalabras;
    }



        
});


})
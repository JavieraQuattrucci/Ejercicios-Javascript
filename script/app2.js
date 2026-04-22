//ordeno 3 números ingresados por el usuario con burbuja
const boton2 = document.getElementById('btnNumeros');
  boton2.addEventListener('click', function() {

    let lista=[]
    for(let i=0;i<3;i++){//para que el prompt se muestre 3 veces
        contador=i+1;
        var num = parseFloat(prompt("Ingrese número " + contador +" :")); //transformo los n a flotantes
        if(num != null)
        {
            if (isNaN(num)){ //valido que no ingresen un valor nulo... lo hago 2 veces 
                alert("Ingresa un número válido");
            return;
            }
            lista.push(num); // agrego el numero a la lista
        }else{            
            console.log("El usuario canceló.");
        }
    } 
    do{
        n=0; //para el largo de la lista
        for(let i=1; i<lista.length;i++)
             //cada numero de la lista, lo compara con el siguiente de la lista
            // si es mayor al numero que le sigue, los da vuelta, dejando así los mayores al final
            if(lista[i-1]>lista[i]){
                temp=lista[i-1]; 
                lista[i-1]=lista[i]; 
                lista[i]=temp;
                n=i;
            }
    }while
        (n!=0);

    if(lista[0]==lista[lista.length-1]){
        console.log("los 3 números son iguales");
        let numerosiguales = document.getElementById('msj2');
        numerosiguales.innerHTML = "Los 3 números son iguales";
    }
    else{
        let numeromayor = document.getElementById('msj2');
        numeromayor.innerHTML = `El número mayor es: ${lista[lista.length-1]} y el menor es: ${lista[0]}`;
        console.log("El mayor de los números que ingresaste es: " +lista[lista.length-1]+" y el menor: "+lista[0]);
    }
    

  });



// creo un círculo a partir del diámetro que ingresa el usuario para mostrarlo en el html
// calculo y le muestro el radio dentro del círculo 
const boton = document.getElementById('miBoton');
  boton.addEventListener('click', function() {

    let diam = prompt("¿Cuál es el diámetro del círculo?");

    if (diam != null) {

        diam = Number(diam);

        if (isNaN(diam) || diam <= 0) {
            alert("Ingresa un número válido");
            return;
        }

        let radio = diam/2
        let area = Math.PI * Math.pow(radio, 2)

        console.log("El radio del círculo es: " + radio);
        console.log("El área del círculo es: " + area);
        // actualiza HTML
        const areaElemento = document.getElementById('areaTxt');
        areaElemento.innerHTML = "El área del círculo es: "+area;
    
        const canvas = document.getElementById('miCanvas');
        const ctx = canvas.getContext('2d');

         // limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const centroX = canvas.width / 2; // la mitad para que no colapse el círculo
        const centroY = canvas.height / 2;

        // Iniciar la ruta del círculo
        ctx.beginPath();
        // arc(x, y, radio, anguloInicio, anguloFin)
        // 2 * Math.PI representa círculo completo
        ctx.arc(centroX, centroY, radio, 0, Math.PI * 2); 

        // Definir color de relleno
        ctx.fillStyle = '#0688f3';
        ctx.fill(); // Rellenar círculo

        // borde
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#1c0045';
        ctx.stroke(); // Dibujar contorno

        //  Línea del radio
        ctx.beginPath();
        ctx.moveTo(centroX, centroY); // centro
        // punto en el borde (ángulo 0  derecha)
        ctx.lineTo(centroX + radio, centroY);

        ctx.strokeStyle = '#ffffff'; // color de la línea
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#fff';
        ctx.font = '14px Arial';
        ctx.fillText('r = ' + radio, centroX + 10, centroY - 10);


        } else
        {
            console.log("El usuario canceló.");
        
        }

  });



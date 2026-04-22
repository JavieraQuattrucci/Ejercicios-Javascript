window.addEventListener("DOMContentLoaded", () => {

const canvas = document.getElementById("particles");

if (!canvas) {
    console.error("No existe el canvas");
    return;
  }

const ctx = canvas.getContext("2d");

function resizeCanvas() {//importante para que el canvas se acomode a distintos tamaños de pantalla sin deformar su contenido
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  // RESET 
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  // aplicar escala limpia
  ctx.scale(dpr, dpr);
}
resizeCanvas(); 
window.addEventListener("resize", resizeCanvas);


const particles = [];
const COUNT = 10; //cantidad bolitas

let mouse = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

// crear partículas
ctx.shadowBlur = 5;
ctx.shadowColor = "#ffd60a";
for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    });
  }

function limitSpeed(p, max) { //importante, función para crear velocidad límite por defecto
    const speed = Math.hypot(p.vx, p.vy);

        if (speed > max) {
            p.vx = (p.vx / speed) * max;
            p.vy = (p.vy / speed) * max;
        }
    }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

      // movimiento base
      p.x += p.vx;
      p.y += p.vy;
      //limitSpeed(p, 0.1);

      // rebote bordes
      if (p.x < -5 || p.x > canvas.width) p.vx *= -1;
      if (p.y < -5 || p.y > canvas.height) p.vy *= -1;

      // repulsión mouse
      let dx = p.x - mouse.x;
      let dy = p.y - mouse.y;
      let dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 200 && dist > 0) {
        p.vx += dx / dist * 0.1;
        p.vy += dy / dist * 0.1;
        limitSpeed(p, 6); //si el mouse está cerca de la bolita, se mueve rápido
      }else{
        limitSpeed(p, 0.1); // sino, por defecto que se muevan muy lento
      }
      
      if (dist < 10 && dist > 0) {
        p.vx += dx / dist * 0.1;
        p.vy += dy / dist * 0.1;
      }
      // dibujar
      ctx.beginPath();
      ctx.arc(p.x, p.y, 100, 0, Math.PI * 2);
      if (dist < 100 && dist > 0) { //si el mouse está dentro de la bolita, resalta con - opacidad
        ctx.fillStyle = "rgba(255, 214, 10, 0.14)";
      }else{
        ctx.fillStyle = "rgba(255, 214, 10, 0.1)";
      }
      
      ctx.fill(); 
      
    });

    requestAnimationFrame(animate);
  }

  animate();

});
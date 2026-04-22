const beam = document.querySelector('.light-beam');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

let t = 0;

// capturar mouse
document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 30;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 30;
});

function animate() {
  // suavizado (delay)
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  // respiración 
  t += 0.01;
  const breatheX = Math.sin(t) * 10;
  const breatheY = Math.cos(t) * 8;

  // combinar ambos
  const x = currentX + breatheX;
  const y = currentY + breatheY;

  beam.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

animate();
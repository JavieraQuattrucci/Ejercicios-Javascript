
//Probando

const beams = document.querySelectorAll('.light-beam1, .light-beam2, .light-beam3, .light-beam4');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX - window.innerWidth / 1;
  mouseY = e.clientY - window.innerHeight / 2;
});

function animate() {
  beams.forEach((beam, i) => {
    const factor = 0.06 + i * 0.03;

    const x = -mouseX * factor;
    const y = -mouseY * factor;

    beam.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(animate);
}

animate();
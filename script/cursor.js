

window.addEventListener('DOMContentLoaded', () => {
  

const cursor = document.querySelector('.cursor-wrap');

const interactiveElements = document.querySelectorAll(
  'a, button, [data-bs-toggle]'
);

interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('active');
  });

  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
  });
});

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.95; //delay cursor
  currentY += (mouseY - currentY) * 0.95;

  cursor.style.left = currentX + 'px';
  cursor.style.top = currentY + 'px';

  requestAnimationFrame(animate);
}

animate();

});
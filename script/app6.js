// Ejercicio 1: Repetir palabra
function repetir() {
  const palabra = document.getElementById("palabra").value;
  const veces = parseInt(document.getElementById("veces").value);
  const resultado = Array(veces).fill(palabra).join(" ");
  document.getElementById("resultado1").textContent = resultado;
}

// Ejercicio 2: Aplicar color
function aplicarColor() {
  const color = document.getElementById("color").value;
  document.getElementById("texto2").style.color = color;
}

// Ejercicio 3: Operaciones matemáticas
function calcular() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  const suma = n1 + n2;
  const resta = n1 - n2;
  const mult = n1 * n2;
  const div = n1 / n2;
  const total = suma + resta + mult + div;

  const resultado = `
    ${n1} + ${n2} = ${suma}
    ${n1} - ${n2} = ${resta}
    ${n1} * ${n2} = ${mult}
    ${n1} / ${n2} = ${div}
    La suma de los resultados es ${total}
  `;

  document.getElementById("resultado3").textContent = resultado;
}

// Ejercicio 4: Invertir texto
function invertir() {
  const texto = document.getElementById("texto4").value;
  const invertido = texto.split("").reverse().join("");
  document.getElementById("resultado4").textContent = invertido;
}

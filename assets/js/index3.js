const resultadoElement = document.querySelector(".resultado");
const valor1Input = document.getElementById("valor1");
const valor2Input = document.getElementById("valor2");
const btnSumar = document.getElementById("btn-sumar");
const btnRestar = document.getElementById("btn-restar");

btnSumar.addEventListener("click", function () {
    const valor1 = +valor1Input.value;
    const valor2 = +valor2Input.value; 
    const resultado = valor1 + valor2;
    resultadoElement.textContent = resultado;
});

btnRestar.addEventListener("click", function () {
    const valor1 = +valor1Input.value;
    const valor2 = +valor2Input.value; 
    let resultado = valor1 - valor2;
    if (resultado < 0) {
        resultado = 0;
    }
    resultadoElement.textContent = resultado;
});
const colorPalette = document.querySelector("#caja");
const colorButtons = document.querySelectorAll("button[id^='btn']");

colorButtons.forEach(button => {
    button.addEventListener("click", function () {
        const color = button.style.backgroundColor;
        colorPalette.style.backgroundColor = color;
    });
});
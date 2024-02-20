
/* let submit = document.getElementById("botton");
submit.addEventListener('click', validar); */


let submitForm = document.querySelector("#formulario")

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    limpiarErrores();
    const input = e.target;

    let formNombre = input.nombre.value;
    let formAsunto = input.asunto.value;
    let formMensaje = input.mensaje.value;

    let resultado = validar(formNombre, formAsunto, formMensaje);

    if (resultado == true) {
        exito()
    };
});

const limpiarErrores = () => {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
}

const exito = () => {
    document.querySelector(".resultado").innerHTML = "Formulario enviado exitosamente!";
};

const validar = (nombre, asunto, mensaje) => {

    let validationOk = true;
    let onlyLetters = /[a-zA-Z]/;

    if(onlyLetters.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido.";
        validationOk = false
    }
    if(onlyLetters.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido.";
        validationOk = false
    }
    if(onlyLetters.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido.";
        validationOk = false
    };
    return validationOk;
};

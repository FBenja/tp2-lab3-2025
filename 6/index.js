const nya = document.getElementById("nya")
const edad = document.getElementById("edad")
const altura = document.getElementById("altura")
const correo = document.getElementById("correo")
const envio = document.getElementById("envio")
const validacion = document.getElementById("validacion")

envio.addEventListener("click", () => {
    if (nya.value.trim() === "" || nya.value.length > 50) {
        validacion.setAttribute("class", "error")
        validacion.innerText = "Nombre y apellido no deben estar vacíos y deben tener menos de 50 caracteres"
    }
    else if (+edad.value <= 0 || +edad.value < 18) {
        validacion.setAttribute("class", "error")
        validacion.innerText = "Debes ser mayor de edad y no puedes cumplir años en negativo"
    }
    else if (+altura.value <= 0 || +altura.value > 230) {
        validacion.setAttribute("class", "error")
        validacion.innerText = "Debes tener una altura mayor a 0 y menor a 230"
    }
    else if (correo.value.trim() === "" || !correo.value.includes("@")) {
        validacion.setAttribute("class", "error")
        validacion.innerText = "El correo debe contener '@' y no debe estar vacío"
    }
    else {
        validacion.setAttribute("class", "bien")
        validacion.innerText = "Formulario enviado correctamente"
    }
})

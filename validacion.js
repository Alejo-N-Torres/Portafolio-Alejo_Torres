export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (input.validity.valid){
        input.parentElement.classList.remove("formcontato__form__box--invalid");
        input.parentElement.querySelector(".formcontato__input--mensajeError").innerHTML = ""
    }else{
        input.parentElement.classList.add("formcontato__form__box--invalid");
        input.parentElement.querySelector(".formcontato__input--mensajeError").innerHTML = mostrarMensajeDeError(tipoDeInput, input)
    }

}

const validadores = {
    nacimiento:  (input) => validarNacimiento(input),
};

const tipoDeError = [
    "valueMissing",
    "tooLong",
    "typeMismatch"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "*Este campo no puede estar vacío",
        tooLong: "*Máximo de caracteres permitidos alcanzados(50)"
    },
    email: {
        valueMissing: "*Este campo no puede estar vacío",
        typeMismatch: "*E-mail no valido"
    },
    asunto:{
        valueMissing: "*Este campo no puede estar vacío",
        tooLong: "*Máximo de caracteres permitidos alcanzados(50)"
    },
    mensaje: {
        valueMissing: "*Este campo no puede estar vacío",
        tooLong: "*Máximo de caracteres permitidos alcanzados(300)"
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeError.forEach((error) => {
        if (input.validity[error]) {
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}
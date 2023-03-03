import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});
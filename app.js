"use strict";
let inputName = document.getElementById("input-name");
let inputLastName = document.getElementById("input-lastname");
let button = document.getElementById("button");
function completarNome(name, lastname) {
    return name + " " + lastname;
}
if (button) {
    button.addEventListener("click", () => {
        if (inputName && inputLastName) {
            let nomeCompleto = completarNome(inputName.value, inputLastName.value);
            console.log(nomeCompleto);
        }
    });
}

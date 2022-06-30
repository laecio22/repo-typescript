"use strict";
let inputName = document.getElementById("input-name");
let inputLastName = document.getElementById("input-lastname");
let button = document.getElementById("button");
function completarNome(pessoa) {
    return pessoa.name + " " + pessoa.lastName;
}
if (button) {
    button.addEventListener("click", () => {
        if (inputName && inputLastName) {
            let pessoa = {
                name: inputName.value,
                lastName: inputLastName.value
            };
            let nomeCompleto = completarNome(pessoa);
            console.log(nomeCompleto);
        }
    });
}

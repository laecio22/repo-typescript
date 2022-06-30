"use strict";
let inputName = document.getElementById("input-name");
let inputLastName = document.getElementById("input-lastname");
let button = document.getElementById("button");
function completarNome(user) {
    return user.username + " " + user.userlastName;
}
if (button) {
    button.addEventListener("click", () => {
        if (inputName && inputLastName) {
            let user = {
                username: inputName.value,
                userlastName: inputLastName.value
            };
            let nomeCompleto = completarNome(user);
            console.log(nomeCompleto);
        }
    });
}

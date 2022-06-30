let inputName =  document.getElementById("input-name") as HTMLInputElement;
let inputLastName = document.getElementById("input-lastname") as HTMLInputElement;
let button = document.getElementById("button");

interface Pessoa {
    name:string,
    lastName:string
}
function completarNome(pessoa:Pessoa){
     return pessoa.name + " " + pessoa.lastName
}

if(button){
   button.addEventListener("click", ()=>{
     if(inputName && inputLastName){
        let pessoa: Pessoa = {   
            name: inputName.value,
            lastName: inputLastName.value
        }

       let nomeCompleto =  completarNome(pessoa)
       console.log(nomeCompleto)
     }
   })
}
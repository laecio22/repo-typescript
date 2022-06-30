let inputName =  document.getElementById("input-name") as HTMLInputElement;
let inputLastName = document.getElementById("input-lastname") as HTMLInputElement;
let button = document.getElementById("button");


function completarNome(name:string, lastname:string){
     return name + " " + lastname
}

if(button){
   button.addEventListener("click", ()=>{
     if(inputName && inputLastName){
       let nomeCompleto =  completarNome(inputName.value , inputLastName.value)
       console.log(nomeCompleto)
     }
   })
}
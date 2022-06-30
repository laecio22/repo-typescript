let inputName =  document.getElementById("input-name") as HTMLInputElement;
let inputLastName = document.getElementById("input-lastname") as HTMLInputElement;
let button = document.getElementById("button");

interface User {
    username:string,
    userlastName:string
}
function completarNome(user:User){
     return user.username + " " + user.userlastName
}

if(button){
   button.addEventListener("click", ()=>{
     if(inputName && inputLastName){
        let user: User = {   
            username: inputName.value,
            userlastName: inputLastName.value
        }

       let nomeCompleto =  completarNome(user)
       console.log(nomeCompleto)
     }
   })
}
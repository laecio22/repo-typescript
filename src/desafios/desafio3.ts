let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let total = 0;

function somarAoSaldo(soma:number) {  
    if(campoSaldo){
        total += soma
        campoSaldo.innerHTML = total.toString();       
    }

    limparInput()
}

function limparSaldo() {

    if(campoSaldo){
        total = 0
       campoSaldo.innerHTML = ""
    }
    
   
}

function limparInput(){
    soma.value = '';
}



if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', function () {      
        somarAoSaldo(Number(soma.value));
    });

}
    botaoLimpar.addEventListener('click', function () {
        limparInput();
        limparSaldo();
    });


const num = document.getElementById("num");
const submit = document.getElementById("submit");
const par_impar = document.getElementById("par-impar");

submit.onclick = function(){
    let numero = parseInt(num.value);

    if(isNaN(numero)){
        par_impar.textContent = `Insira um número válido.`;
        return;
    }

    if (numero % 2 == 0){
        par_impar.textContent = `O número "${numero}" é par.`;
    }
    else {
        par_impar.textContent = `O número "${numero}" é ímpar`;
    }
}
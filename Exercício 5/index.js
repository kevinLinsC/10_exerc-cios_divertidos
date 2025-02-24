const number = document.getElementById("number");
const submit = document.getElementById("submit");
const retorno = document.getElementById("retorno");

submit.onclick = function(){
    let num = parseFloat(number.value);

    if(isNaN(num)){
        retorno.textContent = `Digite um número válido.`;
        return;
    }

    if(isPrimo(num)){
        retorno.textContent = `O número é primo.`;
    }
    else{
        retorno.textContent = `O número não é primo.`;
    }
}

function isPrimo(num) {
    let count = 0;

    // Verifica se o número é primo.
    for(let i = 1; i <= num; i++){ 
        if(num % i === 0){
            count++;
        }

        if(count > 2){
            return false;
        }
    }

    return true;
}
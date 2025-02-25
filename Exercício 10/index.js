const number = document.getElementById("number");
const submit = document.getElementById("submit");
const resultado = document.getElementById("resultado");

submit.onclick = function(){
    let numero = parseInt(number.value);

    if(isNaN(numero)){
        resultado.textContent = `Digite um número válido`;
        return;
    }

    let fatorial = numero;
    for(let i = 1; i < numero; i++){
        fatorial *= i;
    }

    resultado.textContent = `O fatorial de ${numero} é: ${fatorial}`;
}
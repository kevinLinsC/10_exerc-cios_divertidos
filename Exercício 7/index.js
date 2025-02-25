const num = document.getElementById("num");
const porcentagem = document.getElementById("porcentagem");
const submit = document.getElementById("submit");
const resultado = document.getElementById("resultado");

submit.onclick = function(){
    let numero = parseFloat(num.value);
    let porcent = parseFloat(porcentagem.value);
    let result;

    if(isNaN(numero) && isNaN(porcent)){
        resultado.textContent = `Digite um número válido.`;
        return;
    }

    result = numero + (numero * (porcent / 100))
    resultado.textContent = `O resultado é: ${result}`;
}
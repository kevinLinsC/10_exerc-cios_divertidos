const number = document.getElementById("number");
const submit = document.getElementById("submit");
const transformado = document.getElementById("transformado");

submit.onclick = function(){
    let numero = parseFloat(number.value);
    if(isNaN(numero)){
        transformado.textContent = `Digite um número válido.`;
        return;
    }

    let binario = numero.toString(2);
    transformado.textContent = `Convertido para binário: ${binario}`;
}
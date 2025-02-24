const num = document.getElementById("num");
const adicionar = document.getElementById("adicionar");
const array = document.getElementById("array");
const submit = document.getElementById("submit");
const yarra = document.getElementById("yarra");
let numbers = [];
let numbers_inverted = [];

adicionar.onclick = function(){
    let numero = parseFloat(num.value);

    if(isNaN(numero)) {
        alert("Digite um número válido.")
        return;
    }
    
    numbers.push(numero);

    array.textContent = `Números: ${numbers}`;
    num.value = "";
}

submit.onclick = function(){
    numbers_inverted = [];
    if(numbers.length > 1){
        for(let i = numbers.length - 1; i >= 0; i--){
            numbers_inverted.push(numbers[i]);
        }
        yarra.textContent = `O array invertido é: '${numbers_inverted}'`;
    }
    else {
        yarra.textContent = `O array deve ter mais de 1 elemento.`;
    }
}
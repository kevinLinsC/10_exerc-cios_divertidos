const num = document.getElementById("num");
const adicionar = document.getElementById("adicionar");
const array = document.getElementById("array");
const finalizar = document.getElementById("finalizar");
const media = document.getElementById("media");
let numbers = [];

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

finalizar.onclick = function(){
    let mediaAritmetica = 0;
    for(var i = 0; i < numbers.length; i++){
        console.log(numbers[i]);
        mediaAritmetica += numbers[i];
    }
    console.log(mediaAritmetica);
    mediaAritmetica = mediaAritmetica / numbers.length;

    media.textContent = `A média aritmética é: ${mediaAritmetica}`; 
}

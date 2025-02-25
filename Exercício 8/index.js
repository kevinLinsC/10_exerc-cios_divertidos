const frase_id = document.getElementById("frase");
const submit_id = document.getElementById("submit");
const palindromo_id = document.getElementById("palindromo");
const frase_reversed_id = document.getElementById("frase-reversed");

submit.onclick = function(){
    let frase = frase_id.value;
    let frase_invertida = invertPhrase(frase);

    if(palindromo(frase, frase_invertida)){
        palindromo_id.textContent = `A frase é um palindromo.`;
    }
    else{
        palindromo_id.textContent = `A frase não é um palindromo.`;
    }
    
    frase_reversed_id.textContent = `A frase ao contrário é: ${frase_invertida}`;
}

function invertPhrase(frase){
    let frase_invertida = frase.replace(/\s+/g, '').toLowerCase();
    frase_invertida = frase_invertida.split('').reverse().join('');
    return frase_invertida;
}

function palindromo(frase, frase_invertida){
    return frase === frase_invertida;
}
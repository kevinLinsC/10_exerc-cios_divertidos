const texto = document.getElementById("texto");
const submit = document.getElementById("submit");
const texto_upper = document.getElementById("texto-upper");

submit.onclick = function(){
    let frase = texto.value;
    frase = frase.toUpperCase();

    texto_upper.textContent = `Sua frase em upper-case: '${frase}'`;

    texto.value = "";
}
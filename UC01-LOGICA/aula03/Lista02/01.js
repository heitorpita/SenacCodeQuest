const prompt = require('prompt-sync')();

const num = prompt("Digite um numero: ");

if (num >= 1) {
    console.log("Numero é positivo");
} else {
    console.log("Numero é negativo")
}
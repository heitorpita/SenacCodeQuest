const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

if (num >= 1) {
    console.log(`O número ${num} é positivo.`);   
} 
else if (num === 0) {
    console.log("Neutro.");
}
else {
    console.log(`O número ${num} é negativo.`);
}

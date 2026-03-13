const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

if (num % 3 === 0 && num % 7 === 0) {
    console.log(`O número ${num} é divisível por 3 e por 7.`);
} else {
    console.log(`O número ${num} não é divisível por 3 e por 7.`);
    
}
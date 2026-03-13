const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "));

if (num == null || num == 0) {
    console.log("nada foi digitado.");
    
} else {
    console.log(`O usuario digitou : ${num}`);
    
}
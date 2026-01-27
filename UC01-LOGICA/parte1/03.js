const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));

if (idade >= 16) {
    console.log("Você pode votar.");
    
} else {
    console.log("Você não pode votar.");    
}

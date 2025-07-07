const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite sua idade: "));

if (idade < 18) {
    console.log("Você é menor de idade.");
} else {
    console.log("Você é maior de idade.");
}
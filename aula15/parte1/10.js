const prompt = require("prompt-sync")();    

let numeros = prompt("Digite a senha:")

if (numeros === "1234") {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}

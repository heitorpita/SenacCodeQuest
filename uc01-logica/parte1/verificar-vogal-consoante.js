const prompt = require("prompt-sync")();

let letra = prompt("Digite uma letra: ").toLowerCase();

if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    console.log(`${letra} é uma vogal.`);
    
} else {
    console.log(`${letra} é uma consoante.`);
    
}
const prompt = require("prompt-sync")();

let palavra1 = prompt("Digite a primeira palavra: ");
let palavra2 = prompt("Digite a segunda palavra: ");

if (palavra1 === palavra2) {
    console.log("As palavras são iguais.");
}
else {
    console.log("As palavras são diferentes.");
    
}
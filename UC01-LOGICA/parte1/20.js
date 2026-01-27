const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite um número: "));

if (nota > 0 && nota < 10) {
    console.log(`A nota ${nota} é válida.`);
    
} else {
    console.log(`A nota ${nota} não é válida.`);
    
}
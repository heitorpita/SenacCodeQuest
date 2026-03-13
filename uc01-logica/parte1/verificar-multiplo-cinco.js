const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número para verificar se ele é multiplo de 5: "));

if (numero % 5 === 0) {
    console.log(`O número ${numero} é múltiplo de 5.`);
}
else {
    console.log(`o Numero ${numero} não é múltiplo de 5.`);
    
}
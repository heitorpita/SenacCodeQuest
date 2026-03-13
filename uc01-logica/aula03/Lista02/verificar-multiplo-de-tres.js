const prompt = require('prompt-sync')();

const num = Number(prompt("Digite um numero e verifique se ele é multiplo de 3: "))

if (num % 3 === 0) {
    console.log(`O numero ${num} é multiplo de 3`)    
} else {
    console.log(`O num ${num} nao é multiplo de 3`)
}
const prompt = require('prompt-sync')();
const idade = parseInt(prompt("Qual sua idade? "));

if (idade >= 18) {
    console.log(`Já sou de maior e tenho ${idade} anos`);
} else {
    console.log(`Sou de menor e tenho ${idade} anos`);
};
const prompt = require('prompt-sync')();

const idade = Number(prompt("Digite sua idade: "))

if (idade >= 16) {
    console.log(`Parabens, voce tem ${idade} anos e ja pode votar`)
} else {
    console.log(`voce tem ${idade} anos e nao pode votar`)
}
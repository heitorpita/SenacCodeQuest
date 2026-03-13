const prompt = require("prompt-sync")();
const numero = Number(prompt("DIGITE UM NUMERO PARA VER SUA TABUADA: "))

for (let i = 0; i <= 10; i++) {
    if (numero * i % 10 === 0) {
    console.log(`${numero} x ${i} = ${numero * i} - multiplo de 10`);
    } else {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

};


// 6. Tabuada personalizada
// Peça ao usuário um número e use `for` para mostrar a tabuada desse número de 1 a 10.
// Dica: Use `if` para destacar os resultados que são múltiplos de 10 com uma mensagem especial.
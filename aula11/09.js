const prompt = require("prompt-sync")();

let total = 0;

for (let i = 0; i <= 5; i++) {
    let idade = Number(prompt("DIGITE A IDADE: "))
    if (idade >= 18) {
        total++
    }
}
console.log(total)


// 9. Verificando maiores de idade
// Com `for`, leia a idade de 5 pessoas e diga quantas são maiores de idade (18 anos ou mais).
// Dica: Use `if` para contar quantas pessoas atendem à condição
const prompt = require('prompt-sync')();

const num = prompt("Digite um numero:");


if ((num % 2) === 0) {
    console.log(`${num} é par`)
}else {
    console.log(`${num} é impar`)
}

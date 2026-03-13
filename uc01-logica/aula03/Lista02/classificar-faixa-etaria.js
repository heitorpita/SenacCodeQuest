const prompt = require('prompt-sync')();
const idade = parseInt(prompt('Digite a idade: '));

if (idade >= 18) {
    console.log('Maior de idade/adulto');
} else if (idade >= 13 ) {
    console.log('Adolescente');
} else {
    console.log('Criança');
}


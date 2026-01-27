const prompt = require('prompt-sync')();

// Get user input
const input = prompt("Verifique se o ano é bissexto: ");
const num = Number(input);

// Validate input
if (isNaN(num) || num < 0 || !Number.isInteger(num)) {
    console.log("Por favor, insira um ano válido (número inteiro positivo).");
    return;
}

// Check if the year is a leap year
if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
    console.log(`${num} é um ano bissexto.`);
} else {
    console.log(`${num} não é um ano bissexto.`);
}
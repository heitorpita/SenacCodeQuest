const prompt = require("prompt-sync")();

let temperatura =  Number(prompt("Digite a temperatura em Celsius: "));

if (temperatura > 30) {
    console.log(`A temperatura ${temperatura}°C esta maior que 30°C`);
    
} else {
    console.log(`A temperatura ${temperatura}°C esta menor ou igual a 30°C`);
    
}
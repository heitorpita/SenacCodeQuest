const prompt = require("prompt-sync")();

let numero = parseInt(prompt("ESCOLHA  UM NUMERO PARA FAZER A TABUADA: "))

for (let tabuada = 0; tabuada <= 10; tabuada ++) {
    
    console.log(`${numero} x ${tabuada} = ${tabuada * numero}`)
};
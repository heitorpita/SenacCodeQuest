const prompt = require("prompt-sync")();
let lista = [];

for (let i = 0; i < 10 ; i++) {
    let number = Number(prompt("DIGITE UM NUMERO: "))
    lista.push(number)
    lista.sort((a, b) => b - a)
    
}
console.log(lista);
console.log(lista[0]);



// const prompt = require("prompt-sync")();
// let lista = [];

// for (let i = 0; i < 10 ; i++) {
//     let number = Number(prompt("DIGITE UM NUMERO: "))
//     lista.push(number)
//     lista.sort((a, b) => a - b)
    
// }
// console.log(lista);
// console.log(lista[9]);

let numeros = [-4, 3, 0, -1, 10, 7];

// 1. Check positive/negative numbers
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < 0) {
        console.log(`${numeros[i]} é negativo`);
    } else {
        console.log(`${numeros[i]} é positivo`);
    }
}


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} é par`);
    }
}


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(`${i} é ímpar`);
    }
}
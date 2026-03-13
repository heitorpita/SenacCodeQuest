let chico = 1.50;
let ze = 1.10;
let anos =  0;

do {
    chico += 0.02;
    ze += 0.03;
    anos++;

} while (ze < chico)
console.log(`sera necessarios ${anos} anos para ze ser maior que chico`) 
console.log(`ZE:${ze.toFixed(2)}            CHICO:${chico.toFixed(2)}`)

// chico tem 1.50m e cresce 2 cm por ano, enquanto ze tem 1.10 e cresce 3cm por ano
// constura um script que calcule e escreva quantos anos seriam necessarios para que ze ficasse maior que chico
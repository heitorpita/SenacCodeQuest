let numero = 17;
let ehPrimo = true;

if (numero <= 1) {
    console.log("NÃO É PRIMO");
    ehPrimo = false;
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log("NÃO É PRIMO");
            ehPrimo = false;
            break;
        }
    }
}

if (ehPrimo) {
    console.log(`O número ${numero} É PRIMO`);
}
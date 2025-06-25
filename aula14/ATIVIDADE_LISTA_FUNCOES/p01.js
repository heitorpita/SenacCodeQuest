let numero = 5;
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    console.log('------------------');

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} + ${i} = ${numero + i}`);
    }
    console.log('------------------');
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} - ${i} = ${numero - i}`);
        
    }
    console.log('------------------');
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} / ${i} = ${(numero / i).toFixed(2)}`);
    }
}

tabuada(numero);


// P01 - E UMA FUNCAO QUE RECEBA UM NUMERO E EXIBA SUA TABUADA DE 1 A 10
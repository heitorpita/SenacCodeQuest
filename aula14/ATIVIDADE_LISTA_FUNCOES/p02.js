function verificar (parOuImpar) {
  if (parOuImpar % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

let resultado = verificar(255);
console.log(resultado);



// P02 - CRIE UMA FUNCAO QUE RECEBA UM NUMERO E DIGA SE ELE É PAR OU IMPAR
const prompt = require("prompt-sync")();

let mes = parseInt(
  prompt(
    "Digite Um Numero de 1 a 12 de acordo com os meses do ano sendo 1 janeiro 12 dezembro: "
  )
);

switch (mes) {
  case 1:
  case 12:
  case 7:
    console.log("voce esta de Ferias!!!!");
    break;
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:  
    console.log("voce esta no 1 SEMESTRE LETIVO!!!!");
    break;
  case 8:
  case 9:
  case 10:
  case 11:      
    console.log("voce esta no 2 SEMESTRE LETIVO!!!!");
    break;
  default:
    console.log("NUMERO INVALIDO DIGITE UM NUMERO DE 1 A 12");
    break;
}

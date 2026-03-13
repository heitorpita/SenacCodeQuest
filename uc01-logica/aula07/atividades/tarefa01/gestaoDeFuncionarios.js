const prompt = require("prompt-sync")(); 

do {

console.log(`-------- Empresa Funcionário Feliz --------
Digite a opção desejada:
1 - Cálculo de imposto
2 - Cálculo de aumento salarial
3 - Verificar situação do funcionário
4 - Sair
------------------------------------------- \n`)

codigo = parseInt(prompt("Digite a opção desejada: "));

if (codigo === 4) break;

salario = parseInt(prompt("DIGITE SEU SALARIO: "))


switch (codigo) {
    case 1:
        if (salario < 500) {
            imposto = (salario * 5) / 100
            console.log(`O IMPOSTO A SER PAGO É NO VALOR DE ${imposto}`)
        } else if (salario < 851 ) {
             imposto = (salario * 10) / 100
             console.log(`O IMPOSTO A SER PAGO É NO VALOR DE ${imposto}`)
        } else {
             imposto = (salario * 15) / 100
             console.log(`O IMPOSTO A SER PAGO É NO VALOR DE ${imposto}`)
        };
    case 2:
        if (salario < 450) {
            let aumento = salario + 100
            console.log(`AUMENTE DE 100 TOTAL DE ${aumento}`);
            
        } else if (salario < 750) {
            let aumento = salario + 75
             console.log(`AUMENTE DE 75 TOTAL DE ${aumento}`);
        } else if (salario <= 1500 ) {
            let aumento = salario + 50
            console.log(`AUMENTE DE 50 TOTAL DE ${aumento}`);
            
        }else {
            aumento = salario + 25
             console.log(`AUMENTE DE 25 TOTAL DE ${aumento}`);
        };
    case 3:
        if (salario <= 700 ) {
            console.log("MAL REMUNERADO");
            
        } else {
            console.log("BEM REMUNERADO");
            
        }
}




} while (true);
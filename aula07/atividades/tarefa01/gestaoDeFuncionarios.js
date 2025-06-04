const prompt = require("prompt-sync")(); 

do {

console.log(`-------- Empresa Funcionário Feliz --------
Digite a opção desejada:
1 - Cálculo de imposto
2 - Cálculo de aumento salarial
3 - Verificar situação do funcionário
4 - Sair
-------------------------------------------`)

codigo = parseInt(prompt("Digite a opção desejada (1-Cálculo de imposto, 2-Cálculo de aumento salarial, 3-Verificar situação do funcionário, 4-Sair): "));

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
        }
    case 2:
        
}




} while (true);
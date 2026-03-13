let passos = 0;


do {
    passos += 1000
    console.log(`Passos: ${passos}`);
    if (passos === 10000) {
        console.log("META DO DIA ALCANÇADA");
        
    }


} while (passos < 10000);







// 7. Contador de passos
// Ana está tentando andar 10.000 passos por dia. Use `do while` para simular a contagem de passos
// (aumentando de 1000 em 1000) e mostre a cada vez quantos passos ela deu. Quando atingir
// 10.000, exiba "Meta do dia alcançada!".
// Dica: Use `if` para verificar se ela ainda precisa continuar.
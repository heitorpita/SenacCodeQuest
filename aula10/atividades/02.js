let dias = ["segunda", "terça", "quarta", "quinta", "sexta"]
let horas = ["8", "9" , "10" , "11", "12"]

for (i = 0; i < dias.length; i++) {
    for (j = 0; j < horas.length; j++) {
        console.log(`DIA DA SEMANA: ${dias[i]} E HORA AULA ${horas[j]} `);
        
    }
}

// Horários de aula
// Exiba os horários de 4 aulas para cada dia útil da semana.
// Dica: o primeiro laço representa os dias, o segundo os horário
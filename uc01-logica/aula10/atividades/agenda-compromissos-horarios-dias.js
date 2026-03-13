let horario = ["8:00" , "8:30" , "9:00", "9:30", "10:00"]
let dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo"]

for (i = 0; i < dias.length; i++) {
    for (j = 0; j < horario.length; j++) {
        console.log(`HORARIO: ${horario[j]} E DIA: ${dias[i]}`);
        
    }

}


// Agenda de compromissos
// Exiba horários disponíveis a cada meia hora entre 08:00 e 10:00, para cada dia da semana.
// Dica: use um vetor de horários e um de dias
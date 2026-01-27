let proteina = ["frango", "carne", "peixe"]
let carboidrato = ["macarrao", "arroz", "pure"]
let bebida = ["suco", "refrigerante", "energetico"]

for (i = 0; i < proteina.length; i++) {
    for (j = 0; j < carboidrato.length; j++) {
            for (x = 0; x < bebida.length; x++) {
                console.log(`${proteina[i]} , ${carboidrato[j]} e ${bebida[x]}`);
            }
    }

}

// Cardápio de combinações
// Mostre todas as possíveis combinações de pratos com acompanhamentos.
// Dica: dois vetores e dois laços 'for'
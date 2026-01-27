let lista = ['casa', 'computador', 'sol', 'javascript', 'lua'];

let contador = 0;

for (i = 0; i < lista.length; i++) {

    if (lista[i].length > 5) {
        contador++;
        console.log(`A string "${lista[i]}" tem ${lista[i].length} letras (mais de 5)`);
    }


    } 


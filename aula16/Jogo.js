class Jogo {
    titulo;
    genero;
    ano;

    constructor (titulo, genero, ano) {
        this.titulo = titulo;
        this.genero = genero;
        this.ano = ano;
    }

    getTitulo() {
        return this.titulo;
     }

     getGenero() {
        return this.genero;
     }

     getAno() {
        return this.ano;
     }

     setTitulo(titulo) {
        this.titulo = titulo;
     }

     setGenero(genero) {
        this.genero = genero;
     }

     setAno(ano) {
        this.ano = ano;
     }

     exibirDados() {
        return `
        Titulo: ${this.titulo}
        Genero: ${this.genero}
        Ano De Lançamento: ${this.ano}
        `;
     }


    }


    let jogo1 = new Jogo(
        "CS:GO",
        "FPS",
        2012,
    )

    let jogo2 = new Jogo(
        "REZIDENT EVIL",
        "TERROR",
        2013
    )

    console.log(jogo1.exibirDados());
    console.log(jogo2.exibirDados());
    
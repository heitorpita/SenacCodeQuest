class Livro {
  constructor(titulo, autor, anoPublicacao, genero, disponivel = true) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.genero = genero;
    this.disponivel = disponivel;
  }

  emprestar() {
    if (this.disponivel) {
      this.disponivel = false;
      console.log(`O livro "${this.titulo}" foi emprestado.`);
    } else {
      console.log(`O livro "${this.titulo}" já está emprestado.`);
    }
  }

  devolver() {
    if (!this.disponivel) {
      this.disponivel = true;
      console.log(`O livro "${this.titulo}" foi devolvido.`);
    } else {
      console.log(`O livro "${this.titulo}" já está disponível.`);
    }
  }

  exibirInformacoes() {
    return `
      Título: ${this.titulo}
      Autor: ${this.autor}
      Ano: ${this.anoPublicacao}
      Gênero: ${this.genero}
      Disponível: ${this.disponivel ? "Sim" : "Não"}
    `;
  }
}

module.exports = Livro;

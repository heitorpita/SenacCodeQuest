class Usuario {
  nome;
  idade;
  genero;
  telefone;
  email;
  cpf;
  cep;
  rg;

  constructor(nome, idade, genero, telefone, email, cpf, cep, rg) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.telefone = telefone;
    this.email = email;
    this.cpf = cpf;
    this.cep = cep;
    this.rg = rg;
  }

  getNome() {
    return this.nome;
  }

  getIdade() {
    return this.idade;
  }

  getGenero() {
    return this.genero;
  }

  getTelefone() {
    return this.telefone;
  }

  getEmail() {
    return this.email;
  }

  getCpf() {
    return this.cpf;
  }

  getCep() {
    return this.cep;
  }

  getRg() {
    return this.rg;
  }

  setNome(nome) {
    this.nome = nome;
  }
  setIdade(idade) {
    this.idade = idade;
  }

  setGenero(genero) {
    this.genero = genero;
  }

  setTelefone(telefone) {
    this.telefone = telefone;
  }

  setEmail(email) {
    this.email = email;
  }

  setCpf(cpf) {
    this.cpf = cpf;
  }

  setCep(cep) {
    this.cep = cep;
  }

  setRg(rg) {
    thisrg = rg;
  }

   exibirDados() {
    return `
        Nome: ${this.nome}
        Idade: ${this.idade}
        Genero: ${this.genero}
        Telefone: ${this.telefone}
        Email: ${this.email}
        Cpf: ${this.cpf}
        Cep: ${this.cep}
        RG: ${this.rg}
        `;
  }
}

let Usuario1 = new Usuario(
  "heitor",
  20,
  "masculino",
  99984455,
  "heitototo@gmail.com",
  "09991238162",
  12321432,
  1234324353
);


console.log(Usuario1.exibirDados());

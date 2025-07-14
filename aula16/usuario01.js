class Usuario {
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

    getNome() { return this.nome; }
    getIdade() { return this.idade; }
    getGenero() { return this.genero; }
    getTelefone() { return this.telefone; }
    getEmail() { return this.email; }
    getCpf() { return this.cpf; }
    getCep() { return this.cep; }
    getRg() { return this.rg; }

    setNome(nome) { this.nome = nome; }
    setIdade(idade) { this.idade = idade; }
    setGenero(genero) { this.genero = genero; }
    setTelefone(telefone) { this.telefone = telefone; }
    setEmail(email) { this.email = email; }
    setCpf(cpf) { this.cpf = cpf; }
    setCep(cep) { this.cep = cep; }
    setRg(rg) { this.rg = rg; }

    exibirDados() {
        return `
Nome: ${this.nome}
Idade: ${this.idade}
Gênero: ${this.genero}
Telefone: ${this.telefone}
Email: ${this.email}
CPF: ${this.cpf}
CEP: ${this.cep}
RG: ${this.rg}
        `;
    }
}

let usuario1 = new Usuario("Heitor", 20, "Masculino", 99984455, "heitototo@gmail.com", "09991238162", 12321432, 1234324353);

console.log(usuario1.getNome());
console.log(usuario1.getIdade());
console.log(usuario1.getGenero());
console.log(usuario1.getTelefone());
console.log(usuario1.getEmail());
console.log(usuario1.getCpf());
console.log(usuario1.getCep());
console.log(usuario1.getRg());

// Exibir todos os dados
console.log(usuario1.exibirDados());

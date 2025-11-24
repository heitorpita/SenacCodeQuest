create database aulas;


CREATE TABLE IF NOT EXISTS Fornecedores (
ID SERIAL PRIMARY KEY,
NOME VARCHAR(255),
RUA VARCHAR(255),
CIDADE VARCHAR(255),
ESTADO CHAR(2)
);


CREATE TABLE IF NOT EXISTS Categorias (
 ID SERIAL PRIMARY KEY,
 NOME VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS Produtos (
 ID SERIAL PRIMARY KEY,
 NOME VARCHAR(255),
 QUANTIDADE INTEGER,
 PRECO NUMERIC(10, 2),
 FK_FORNECEDOR INTEGER,
 FK_CATEGORIA INTEGER,
 CONSTRAINT fk_fornecedor FOREIGN KEY (FK_FORNECEDOR) REFERENCES Fornecedores(id),
 CONSTRAINT fk_categoria FOREIGN KEY (FK_CATEGORIA) REFERENCES Categorias(id)
);

insert into fornecedores (nome, rua, cidade, estado) 
values ('Ajax SA', 'Rua Presidente Castelo Branco', 'Porto Alegre', 'RS'), ('Sansul SA', 'Av Brasil', 'Rio De Janeiro', 'RJ'), ('South Chairs','Rua Do Moinho', 'Santa Maria', 'RS'), ('Elon Electro', 'Rua Apolo', 'São Paulo', 'SP'), ('Mike electro', 'Rua Pedro da Cunha', 'Curitiba', 'PR');

insert into categorias (nome)
values ('Super Luxo'), ('Importado'), ('Tecnologia'), ('Vintage'),('Supremo')

insert into produtos(nome, quantidade, preco, fk_fornecedor, fk_categoria)
values ('Cadeira Azul', 30, 300, 1, 1), ('Cadeira Vermelha', 50, 2150, 2, 2), ('Guarda-Roupa Disney', 400 , 829.50, 3, 3), ('Torradeira Vermelha', 20, 9.90, 4, 4), ('TV', 30, 3000.25, 5, 5)

--3 implemente uma constraint que assegure que a coluna quantidade na tabela produtos nunca seja nula

alter table produtos
alter column quantidade set not null;


--QUESTAO 5 CRIE UMA constraint para que o nome das categorias na tabela categorias seja unico 
alter table categorias 
add constraint unique_nome_categorias unique(nome);

-- QUESTAO 7 INSERIR DADOS DE DOIS FORNECEDORES DISTINTOS SENDO 1 DO RN E OUTRO DA PARAIBA
insert into fornecedores(nome, rua, cidade, estado)
values ('SENAC', 'RUA SENAC ', 'NATAL', 'RN'), ('LEITE BOM', 'RUA PADRE CICERO', 'JOAO PESSOA', 'PB')

-- QUESTAO 8 INSERIR dados de mais 1 categoria de nome nacional 
insert into categorias(nome)
values('Nacional');

--QUESTAO 19 - RECUPERE DA TABELA FORNECEDOR , O NOME DE TODOS OS FORNECEDORES QUE CONTENHAM A LETRA S

select nome from fornecedores 
where LOWER(nome) like '%s%'









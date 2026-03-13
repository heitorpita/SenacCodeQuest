create database aula;

CREATE TABLE IF NOT EXISTS GENERO (
    ID SERIAL PRIMARY KEY,
    NOME VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS ARTISTA (
    ID SERIAL PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS MUSICA (
    ID SERIAL PRIMARY KEY,
    TITULO VARCHAR(255) NOT NULL,
    ANO INT NOT NULL,
    FK_GENERO INT NOT NULL,
    FK_ARTISTA INT NOT NULL,
    CONSTRAINT fr_genero FOREIGN KEY (FK_GENERO) REFERENCES GENERO(ID),
    CONSTRAINT fr_artista FOREIGN KEY (FK_ARTISTA) REFERENCES ARTISTA(ID)
);

insert into genero (nome)
values ('Pop'), ('Rock Alternativo'), ('Funk');

insert into artista(nome)
values ('The Weeknd'), ('Imagine Dragons'), ('Anitta');

insert into musica (titulo, ano, fk_genero, fk_artista)
values ('Blinding Lights', 2019, 1, 1), ('Believer', 2017, 2, 2), ('Show das Poderosas', 2013, 3, 3);

select * from musica

-- Liste Todos os Generos Cadastrados
select * from genero

--  Liste apenas os nomes dos artistas
select nome from artista

-- Liste os Titulos de todas as musicas
select titulo from musica

-- Liste os dados das musicas com genero id 1
select * from musica where fk_genero = 1

-- Liste os dados das musicas com genero id 3
select * from musica where fk_genero = 3

-- Liste os generos ordenados por nome em ordem crescente 

select * from genero order by nome;

-- Liste os artistas ordenados pelo nome em ordem descrescente
select * from artista order by nome desc;

-- liste as musicas cujo titulo contenha a palavra amor
select titulo from musica where LOWER(titulo) like '%show%'
 
-- liste todos os generos cujo nome tenha mais de 5 caracteres
select * from genero where length(nome) > 5

-- INSIRA UM genero chamdo Rock
insert into genero(nome) values ('Rock')

-- insira um artista chamado queen
insert into artista(nome) values ('Queen')

-- liste os titulos da musica renomeando a coluna como nome_musica
select titulo as nome_musica from musica

-- liste os generos renomeando a tabela como g usando alias
select g.nome from genero as g

-- insira tres generos diferentes em um unico comando
insert into genero(nome)
values 
('FORRO'), ('SERTANEJO'), ('BREGADEIRA')

-- atualize o nome do genero com ID = 3 para "funk carioca"
update genero set nome = 'Funk Carioca'
where id = 3


-- atualize o nome da musica believer para believer(remastered)
update musica set titulo = 'Believer (Remastered)'
where titulo = 'Believer'

-- atualize o nome da musica Blinding Lights atualiza o ano para 2020
update musica set ano = 2020
where ano = 2019


-- altere o artista com id = 3 para annita (BR) EO ANO DE ESTREIa da musica para 2014
update artista set nome = 'ANNITA(BR)'
where id = 3;

update musica set ano = 2014
where id = 3;

-- aumenta o ano de todas as musicas em +1 usando UPDATE
update musica 
set ano = ano + 1;

-- adicione a tabela artista o campo: nacionalidade VARCHAR(40)
alter table artista;
add column nacionalidade varchar(40);

--renomear titulo da tabela artista para nome

alter table musica 
rename column titulo to nome;

-- adicionar o campo duracao segundos
-- na tabela musica com valor default 0 e nao nulo int

alter table musica 
add column duracao_segundos int not null default  0; 

alter table musica add constraint chk_ano check (ano > 1990)


insert into musica(nome, ano, fk_artista, fk_genero)
values('')
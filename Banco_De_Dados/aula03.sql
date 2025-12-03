create table pessoas (

	id integer primary key,
	nome varchar(100),
	idade integer
	
);


insert into pessoas(id, nome, idade) values (1, 'HP', 20);

insert into pessoas(id, nome, idade) values (2, 'PH', 17), (3, 'PL', 19), (4, 'JONJA', 17);

select * from pessoas;

select nome, idade from pessoas

select nome, idade from pessoas where idade >= 20;

insert into pessoas values (5, 'Joana Labs', 29), (6,'Joao victor', 20), (7,'MORMONT', 77), (8,'JONAH', 44)

select nome, idade from pessoas where idade between 18 and 35;

select nome, idade from pessoas order by idade

select nome, idade from pessoas order by idade desc;

select nome, idade from pessoas order by nome

update pessoas set idade = 35 where nome = 'Joao victor'

delete from pessoas where id = 3;


/**
 * DATE
 * TIME
 * TIMESTAMP - DATA E HORA
 * TIMESTAMPTZ - FUSO HORARIO
 * INTERVAL - INTERVALOS DE TEMPOS
 */


/**
 * BOOLEAN
 * TRUE
 * FALSE
 * NULL
 */


create table livraria(

	id serial primary key ,
	preco decimal(10, 2) not null,
	titulo varchar(50) not null,
	data_publicacao date,
	disponivel boolean,
	autor varchar(100)
);

insert into livraria(preco, titulo, data_publicacao, disponivel, autor) values (50.00, 'PRISIONEIRO DE AZKABAN', '2002-05-20', true, 'JK ROWLING');

-- Criar uma tabela 'vendas' que registre 

/*
 * id unico, data da venda e valor total
 * forma de pagamento(dinheiro cartao pix ou boleto)
 * status de pagamento(pendente, pago, cancelado)
 * deve usar default para data da venda e status do pagamento
 * 
 */




create table if not exists vendas (
	
	id serial primary key,
	
	numero_nota_fiscal varchar(30) not null unique,
	
	data_venda timestamp default CURRENT_TIMESTAMP ,
	
	valor_total numeric(10,2) not null check (valor_total >= 0),
	
	forma_pagar varchar(50) not null check (forma_pagar in ('dinheiro', 'cartao', 'pix', 'boleto')),
	status_pagar varchar(50) not null default 'pendente' check ( status_pagar in ('pendente','pago', 'cancelado'))
	
 );


 -- if not exists permite que o sistema verifique se ha tabela criada, se nao existir ele cria a tabela





create table departamentos (

	id serial primary key,
	nome varchar(50) not null unique,
	sigla varchar(5),
	ativo boolean default true

);


create table funcionarios(

	id serial primary key,
	nome varchar(100) not null,
	cpf char(11) unique not null,
	salario decimal(10,2),
	departamento_id integer not null,
	
	foreign key (departamento_id) references departamentos(id)

);


--inserindo departamneto(ordem importa)

insert into departamentos(nome, sigla)
values ('TECNOLOGIA DA INFORMAÇÃO','TI'), ('RECURSOS HUMANOS', 'RH'), ('FINANCEIRO', 'FN')

--inserindo funcionarios

insert into funcionarios(nome, cpf, salario, departamento_id)
values('jj', '10000211460', 1600.00, 1), ('suz','20000211460', 2000.00, 2), ('pz','30000211460', 15000.00, 1)






-- inline, constraint, separada e com o nome constraint

create table cliente(

	id serial primary key,
	nome varchar(10)


)


create table pedidos(

	id serial primary key,
	cliente_id references cliente(id), --inçine
	data_pedido date


)


create table itens_pedido (

	id serial primary key,
	pedido_id integer,
	produto_id integer,
	quantidade integer,

	
		foreign key  (pedido_id) references pedidos(id) -- constraint separada
)


create table avaliacoes(

	id serial primary key, 
	produto_id integer,
	usuario_id integer



	constraint fk_avaliacao_pedido -- com o nome constraint
		foreign key  (produto_id) references produtos(id)
)




-- exemplo n:n

create table alunos_novos(
	
	id serial primary key,
	matricula varchar(10) unique not null,
	nome varchar(100) not null

);


create table disciplinas( 

	id serial primary key,
	codigo varchar(10) unique not null,
	nome varchar(100) not null,
	carga_horaria integer check (carga_horaria >= 4)
	

);

create table matriculas(

	id serial primary key,
	alunos_novos_id integer not null,
	disciplina_id integer not null,
	data_matricula date default current_date,
	nota_final decimal(4,2),
	
	foreign key (alunos_novos_id) references alunos_novos(id),
	foreign key (disciplina_id) references disciplinas(id ),
	
	unique (alunos_novos_id, disciplina_id)
);


insert into alunos_novos (matricula, nome) values ('202501', 'jp');

insert into disciplinas ( codigo, nome, carga_horaria) values ('INF101', 'BANCO DE DADOS', 5) , ('INF102','LOGICA DE PROGRAMAÇÃO', 10);

insert into matriculas (alunos_novos_id, disciplina_id) values (1,1);




create table livraria_leitura (

	id serial primary key,
	nome varchar(50) not null,
	preco numeric(10, 2) not null check (preco >= 0)

)

create table cliente_leitura(

	id serial primary key,
	nome varchar(150) not null,
	email varchar (150) unique not null check (email like '%@%'),
	cidade varchar(150),
	estado char(2)

)


create table vendas_leitura (

	id serial primary key,
	cliente_id int references cliente_leitura(id),
	produto_id integer references livraria_leitura(id),
	quantidade integer not null check (	quantidade > 0),
	data_venda date not null default current_date
	
)

insert into cliente_leitura (nome, email, cidade, estado) values 
('na clera', 'naclera@gmail.com', 'Patos', 'PB'), ('douglas', 'douglas@email.com', 'Natal', 'RN');

insert into livraria_leitura (nome, preco) values
('caderno', 15.50), ('caneta preta', 27.80), ('duna o livro ', 220)

insert into vendas_leitura (cliente_id, produto_id, quantidade) values 
(1, 1, 2);

insert into vendas_leitura (cliente_id, produto_id, quantidade) values 
(2, 3, 1);

insert into vendas_leitura (cliente_id, produto_id, quantidade) values 
(1, 2, 5);

insert into vendas_leitura (cliente_id, produto_id, quantidade, data_venda) values 
(2, 1, 3, '2025-12-05');

-- saber a quantidade total de produtos vendidos 
select sum(quantidade) as total_itens_vendidos from vendas_leitura;

-- media de precos (perguntar sobre como colocar format arredondar o valor decimal)
select avg(preco) as media_precos from livraria_leitura;

-- qual produto mais caro
select max(preco) as maior_preco from livraria_leitura

--menor preco
select min(preco) as maior_preco from livraria_leitura

--quantidade de clientes
select count(*) as quantidade_clientes from cliente_leitura

--total por clientes
select cliente_id, sum(quantidade) as total_itens from vendas_leitura group by cliente_id;



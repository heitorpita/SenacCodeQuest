

create table categorias (
	id serial primary key,
	nome varchar(150) not null unique,
	descricao text,
	ativa boolean default true
);

create table produtos(
	id serial primary key,
	nome varchar(150) not null,
	descricao text,
	preco decimal(10, 2) not null check (preco > 0),
	estoque int default 0 check (estoque >= 0),
	categoria_id int not null,
	ativo boolean default true,

	foreign key (categoria_id) references categorias(id) on delete restrict on update cascade
);

create table clientes (
	id serial primary key,
	nome varchar(150) not null,
	email varchar(150) not null unique,
	cpf char(11) not null unique,
	telefone varchar(20) not null constraint uk_cliente_telefone unique,
	data_cadastro timestamp default current_timestamp
);

create table enderecos (
	id serial primary key,
	cliente_id int not null,
	rua varchar(300) not null,
	numero varchar(10) not null,
	cidade varchar(150) not null,
	estado char(2) not null,
	cep char(8) not null,
	principal boolean default false, 
	
	foreign key (cliente_id) references clientes(id) on delete cascade on update cascade
);


create table pedidos(
	id serial primary key,
	cliente_id integer not null,
	data_pedido timestamp default current_timestamp, 
	status varchar(100) not null default 'pendente' check (status in ('PENDENTE', 'PROCESSANDO', 'ENVIADO', 'ENTREGUE', 'CANCELADO')),
    valor_total decimal(10,2) not null check (valor_total >= 0),
    
    foreign key (cliente_id) references clientes(id) on delete restrict on update cascade
);


create table itens_pedido (
	id serial primary key,
	pedido_id int not null,
	produto_id int not null,
	quant int not null check (quant  >= 1),
	preco_unitario decimal(10,2) not null check (preco_unitario > 0), -- Adicionado CHECK
	
	foreign key (pedido_id)  references pedidos(id)  on delete cascade on update cascade,
    foreign key (produto_id)  references produtos(id)  on delete restrict on update cascade,
    unique (pedido_id, produto_id)
);


create table pagamentos(
	id serial primary key,
	pedido_id int not null unique, 
	forma_pagamento varchar(50) not null,
	valor decimal(10,2) not null check (valor > 0),
	data_pagamento timestamp default current_timestamp, 
	status varchar(100) not null default 'pendente' check (status in ('PENDENTE', 'APROVADO', 'NEGADO', 'ESTORNADO')),
	
	foreign key (pedido_id) references pedidos(id) on delete cascade on update cascade
);



create table avaliacoes (
	id serial primary key,
	produto_id int not null,
	cliente_id int not null, 
	nota int not null check (nota between 1 and 5), 
	comentario text,
	data timestamp default current_timestamp,

	foreign key (produto_id) references produtos(id) on delete restrict on update cascade,
    foreign key (cliente_id) references clientes(id) on delete restrict on update cascade,
    unique (produto_id, cliente_id) 
);
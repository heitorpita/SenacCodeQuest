create table paciente (
	id serial primary key,
	nome varchar(120) not null,
	cpf varchar(11) unique,
	status varchar(20) default 'ativo'
);

create table consultas(
	id serial primary key,
	paciente_id integer not null references paciente(id) on delete cascade on update cascade,
	data_consulta date not null,
	descricao text
);

create table prescricoes(
	id serial primary key,
	consulta_id integer references consultas(id) on delete set null,
	medicamento varchar(150) not null,
	dosagem varchar(50)
);

create table historico_internacoes(
	id serial primary key,
	paciente_id integer references paciente(id) on delete restrict,
	data_entrada date default current_date not null,
	data_saida date
);

create table anotacoes_administrativas(
	id serial primary key,
	paciente_id integer references paciente(id) on delete no action
);
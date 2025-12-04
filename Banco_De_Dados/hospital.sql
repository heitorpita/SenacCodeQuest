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


INSERT INTO paciente (nome, cpf, status) VALUES
('Ana Beatriz Costa', '12345678901', 'ativo'),
('João Pedro Fernandes', '98765432100', 'ativo'),
('Marina Lopes de Souza', '45678912355', 'inativo'),
('Carlos Henrique Silva', '11223344556', 'ativo'),
('Fernanda Ribeiro Castro', '99887766554', 'ativo');

INSERT INTO consultas (paciente_id, data_consulta, descricao) VALUES
(1, '2025-01-10', 'Consulta de rotina, sem alterações.'),
(1, '2025-02-15', 'Retorno: queixas de dor de cabeça.'),
(2, '2025-01-20', 'Avaliação geral, pressão elevada.'),
(3, '2025-01-25', 'Consulta por febre persistente.'),
(4, '2025-02-01', 'Acompanhamento pós-operatório.');

INSERT INTO prescricoes (consulta_id, medicamento, dosagem) VALUES
(1, 'Paracetamol', '500mg a cada 8h'),
(2, 'Ibuprofeno', '200mg a cada 6h'),
(3, 'Captopril', '25mg pela manhã'),
(4, 'Amoxicilina', '500mg a cada 8h por 7 dias'),
(5, 'Dipirona', '1g se dor');


INSERT INTO historico_internacoes (paciente_id, data_entrada, data_saida) VALUES (1, '2024-12-01', '2024-12-05');
INSERT INTO historico_internacoes (paciente_id, data_saida) values (1, '2024-12-05'), (2, '2025-01-14');



INSERT INTO anotacoes_administrativas (paciente_id) values (1), (2);
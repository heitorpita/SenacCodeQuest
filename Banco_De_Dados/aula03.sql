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



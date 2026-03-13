# UC05 — Backend com Banco de Dados

Integração de APIs Node.js com bancos de dados relacionais usando ORMs modernos (Prisma e Sequelize) e migrations.

## Conteúdo

| Pasta | Descrição |
|-------|-----------|
| [aula00](./aula00/) | Conexão básica com banco de dados |
| [aula01](./aula01/) | Prisma — modelagem de Carro e Proprietário |
| [aula02](./aula02/) | Prisma — relação Aluno e Curso com migrations |
| [aula03](./aula03/) | Prisma — migrations avançadas e seeds |
| [PrismaTest](./PrismaTest/) | Testes e experimentações com Prisma |
| [sequelize-migrations](./sequelize-migrations/) | Projeto completo de gestão de restaurante com Sequelize e migrations |
| [2025.11.177-UC9-gestao_restaurante](./2025.11.177-UC9-gestao_restaurante/) | Projeto de gestão de restaurante (versão UC9) |

## Destaque: sequelize-migrations

Projeto de gestão de restaurante completo que demonstra o uso de **Sequelize** com migrations, seeders e módulos separados por domínio (cardápio, mesas, usuários).

```bash
cd sequelize-migrations
npm install
npm start
```

## Tecnologias

- Node.js, Express
- Prisma ORM
- Sequelize ORM
- PostgreSQL
- Migrations e Seeders

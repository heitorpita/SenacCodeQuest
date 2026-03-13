# Desafios

Projetos práticos desenvolvidos ao longo do curso. Cada desafio aplica os conhecimentos das unidades curriculares em cenários reais — APIs REST, autenticação, banco de dados e sistemas CRUD completos.

## Projetos

| Pasta | Projeto | Descrição | Tecnologias |
|-------|---------|-----------|-------------|
| [catalogo-musica-api](./catalogo-musica-api/) | Catálogo de Música | API REST para gerenciar catálogo de músicas com artistas, álbuns e faixas | Node.js, Express |
| [sistema-tarefas-backend](./sistema-tarefas-backend/) | Sistema de Tarefas | Gerenciador de tarefas com autenticação JWT e arquitetura MVC | Node.js, Express, JWT |
| [cadastro-pet](./cadastro-pet/) | Cadastro de Pet | API para cadastro e gerenciamento de pets | Node.js, Express |
| [feed-api](./feed-api/) | Feed Social | Feed social com posts e comentários usando Prisma ORM | Node.js, Express, Prisma, PostgreSQL |
| [mobility-x](./mobility-x/) | MobilityX | Marketplace de veículos com clientes, vendas, pagamentos e auditoria | Node.js, Express, PostgreSQL, JWT |

## Padrão Utilizado

Todos os projetos backend seguem o padrão **MVC**:
```
src/
├── controllers/   lógica de negócio
├── models/        acesso a dados
├── routes/        definição de rotas
└── middlewares/   autenticação, validação
```

## Como Executar

Cada projeto possui seu próprio `package.json`. Acesse a pasta do projeto e execute:

```bash
npm install
npm start
```

Consulte o README individual de cada projeto para variáveis de ambiente e configuração do banco de dados.

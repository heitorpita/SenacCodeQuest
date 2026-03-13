# UC06 — Documentação de API

Como documentar APIs REST com **Swagger / OpenAPI 3.0** integrado ao Express.js.

## Conteúdo

| Pasta | Descrição |
|-------|-----------|
| [aula01](./aula01/) | API Express com Swagger UI integrado e documentação em YAML |

## Estrutura do Projeto (aula01)

```
aula01/
├── app.js
└── src/
    ├── controllers/
    ├── routes/
    ├── models/
    └── docs/
        ├── swagger.js    configuração do Swagger UI
        └── swagger.yaml  especificação OpenAPI 3.0
```

## Como Executar

```bash
cd aula01
npm install
npm start
```

Acesse a documentação em: `http://localhost:3000/api-docs`

## Tecnologias

- Node.js, Express
- Swagger UI Express
- OpenAPI 3.0 (YAML)

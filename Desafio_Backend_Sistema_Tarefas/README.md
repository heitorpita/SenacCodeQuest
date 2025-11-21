# Sistema de Tarefas com Autenticação (MVC)

Projeto desenvolvido no curso Técnico em Informática para Internet - Senac.

## Descrição
Sistema backend para gerenciamento de tarefas com autenticação via JWT, consumindo API externa ViaCEP e utilizando arquitetura MVC.

## Tecnologias
- Node.js
- Express
- JWT (jsonwebtoken)
- bcrypt
- axios
- uuid
- dotenv
- nodemon

## Funcionalidades
- Cadastro e autenticação de usuários
- Preenchimento automático do endereço via ViaCEP
- CRUD completo de tarefas vinculadas ao usuário autenticado
- Controle de acesso e validação de dados

## Como usar
1. Clone o repositório
2. Instale as dependências com `npm install`
3. Configure o arquivo `.env` com as variáveis necessárias
4. Execute `npm run dev` para iniciar o servidor em modo desenvolvimento
5. Teste os endpoints com Insomnia ou Postman

## Estrutura
- app.js: configuração do servidor e rotas
- src/controllers: lógica dos recursos
- src/routes: definição dos endpoints
- src/models: estrutura de dados
- src/middlewares: autenticação e validações
- src/data: armazenamento em memória

###

🚀 Inicializando projeto Node.js com Prisma...

# Inicializa o projeto Node
npm init -y

# Instala dependências principais
npm install express dotenv pg prisma @prisma/client

# Adapter PostgreSQL do Prisma
npm install @prisma/adapter-pg

# Inicializa Prisma
npx prisma init

# Cria estrutura de pastas
mkdir -p src/infra src/controller src/models src/routes

# Cria arquivos base
touch app.js
touch src/infra/database.js
touch src/controller/exampleController.js
touch src/models/exampleModel.js
touch src/routes/exampleRoutes.js

# Criar migration (dev)
npx prisma migrate dev --name migration_name

# Aplicar migrations (produção)
npx prisma migrate deploy

# Gerar client
npx prisma generate

# Abrir Prisma Studio
npx prisma studio

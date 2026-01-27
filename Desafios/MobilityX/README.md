# 🚗 MobilityX – Marketplace de Veículos (MVP)

MVP de um marketplace de veículos com Node.js + Express + PostgreSQL, contendo autenticação JWT, controle de usuários, clientes, veículos, vendas, pagamentos e auditoria.

## 📋 Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Como Executar](#como-executar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Diagrama de Entidades](#diagrama-de-entidades)
- [Endpoints da API](#endpoints-da-api)
- [Exemplos de Requisições](#exemplos-de-requisições)
- [Usuários de Teste (Seed)](#usuários-de-teste-seed)
- [Decisões Técnicas](#decisões-técnicas)

---

## 🔧 Pré-requisitos

- **Node.js** >= 18.x
- **PostgreSQL** >= 14.x
- **npm** ou **yarn**

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/heitorpita/MobilityX.git
cd MobilityX

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Execute o script SQL para criar as tabelas
psql -U seu_usuario -d seu_banco -f sql/script.sql
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Servidor
PORT=3000
NODE_ENV=development

# Banco de Dados
DATABASE_URL=postgresql://usuario:senha@localhost:5432/mobilityx

# JWT
JWT_SECRET=sua_chave_secreta_muito_segura_aqui
JWT_EXPIRES_IN=24h

# Bcrypt
SALT_ROUNDS=10
```

---

## 🚀 Como Executar

```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Modo produção
npm start
```

A aplicação estará disponível em: `http://localhost:3000`

### Healthcheck

```bash
curl http://localhost:3000/health
```

---

## 📁 Estrutura do Projeto

```
MobilityX/
├── app.js                    # Ponto de entrada da aplicação
├── package.json
├── .env                      # Variáveis de ambiente (não versionado)
├── sql/
│   └── script.sql           # Schema do banco + seeds
└── src/
    ├── db/
    │   └── db.js            # Configuração do PostgreSQL
    ├── middlewares/
    │   ├── authMiddleware.js        # Autenticação JWT
    │   └── autorizationMiddleware.js # Autorização por perfil
    ├── utils/
    │   └── validators.js    # Validadores (email, senha, etc.)
    └── modules/
        ├── User/            # Usuários e autenticação
        ├── Cliente/         # Clientes (compradores)
        ├── Veiculos/        # Estoque de veículos
        ├── Vendas/          # Gestão de vendas
        ├── Pagamentos/      # Registro de pagamentos
        └── Auditoria/       # Logs de auditoria
```

---

## 📊 Diagrama de Entidades

```mermaid
erDiagram
    USERS ||--o| CLIENTS : "1:1 (cliente)"
    USERS ||--o{ SALES : "vende"
    CLIENTS ||--o{ SALES : "compra"
    VEHICLES ||--o{ SALES : "é vendido"
    SALES ||--o{ PAYMENTS : "recebe"
    USERS ||--o{ AUDIT_LOGS : "executa"

    USERS {
        int id PK
        string name
        string email UK
        string password_hash
        string role "admin|seller|cliente"
        timestamp created_at
    }

    CLIENTS {
        int id PK
        int usuario_id FK,UK
        string name
        string document UK
        string email
        string phone
        timestamp created_at
    }

    VEHICLES {
        int id PK
        string brand
        string model
        int year
        decimal price
        string status "disponivel|reservado|vendido"
        timestamp created_at
    }

    SALES {
        int id PK
        int vehicle_id FK
        int client_id FK
        int seller_id FK
        decimal final_price
        string payment_method
        string status "em_andamento|concluida|cancelada"
        text notes
        timestamp created_at
        timestamp updated_at
    }

    PAYMENTS {
        int id PK
        int sale_id FK
        decimal amount
        string payment_method
        timestamp created_at
    }

    AUDIT_LOGS {
        int id PK
        int user_id FK
        string action
        string resource
        int resource_id
        jsonb payload
        timestamp created_at
    }
```

---

## 🔌 Endpoints da API

### Healthcheck
| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| GET | `/health` | Status da aplicação | ❌ |

### Usuários
| Método | Rota | Descrição | Auth | Perfis |
|--------|------|-----------|------|--------|
| POST | `/user/register` | Registrar admin/seller | ❌ | - |
| POST | `/user/register/cliente` | Registrar cliente | ❌ | - |
| POST | `/user/login` | Login | ❌ | - |
| GET | `/user/me` | Meu perfil completo | ✅ | todos |
| PUT | `/user/me` | Atualizar meu perfil | ✅ | todos |
| PATCH | `/user/me/senha` | Alterar minha senha | ✅ | todos |
| DELETE | `/user/me` | Excluir minha conta | ✅ | cliente |
| GET | `/user` | Listar usuários | ✅ | admin |
| DELETE | `/user/:id` | Remover usuário | ✅ | admin |

### Veículos
| Método | Rota | Descrição | Auth | Perfis |
|--------|------|-----------|------|--------|
| GET | `/veiculos/disponiveis` | Listar disponíveis | ✅ | todos |
| GET | `/veiculos` | Listar todos | ✅ | admin, seller |
| GET | `/veiculos/:id` | Buscar por ID | ✅ | todos |
| POST | `/veiculos` | Cadastrar | ✅ | admin, seller |
| PUT | `/veiculos/:id` | Atualizar | ✅ | admin, seller |
| DELETE | `/veiculos/:id` | Remover | ✅ | admin |

### Vendas
| Método | Rota | Descrição | Auth | Perfis |
|--------|------|-----------|------|--------|
| POST | `/vendas` | Criar venda | ✅ | todos |
| GET | `/vendas` | Listar vendas | ✅ | todos* |
| GET | `/vendas/:id` | Buscar por ID | ✅ | todos* |
| PATCH | `/vendas/:id/concluir` | Concluir venda | ✅ | todos* |
| PATCH | `/vendas/:id/cancelar` | Cancelar venda | ✅ | todos* |
| DELETE | `/vendas/:id` | Remover venda | ✅ | admin |

*Cliente só vê/opera suas próprias vendas

### Pagamentos
| Método | Rota | Descrição | Auth | Perfis |
|--------|------|-----------|------|--------|
| POST | `/vendas/:sale_id/pagamentos` | Registrar pagamento | ✅ | todos* |
| GET | `/vendas/:sale_id/pagamentos` | Listar pagamentos | ✅ | todos* |

---

## 📝 Exemplos de Requisições

### Registrar Cliente

```bash
curl -X POST http://localhost:3000/user/register/cliente \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "password": "Senha123",
    "document": "12345678901",
    "phone": "11999999999"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/user/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joao@email.com",
    "password": "Senha123"
  }'
```

### Listar Veículos Disponíveis

```bash
curl http://localhost:3000/veiculos/disponiveis \
  -H "Authorization: Bearer SEU_TOKEN"
```

### Criar Venda (como cliente)

```bash
curl -X POST http://localhost:3000/vendas \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN_CLIENTE" \
  -d '{
    "vehicle_id": 1,
    "final_price": 150000.00,
    "payment_method": "financiamento",
    "notes": "Entrada de 30%"
  }'
```

### Registrar Pagamento

```bash
curl -X POST http://localhost:3000/vendas/1/pagamentos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN" \
  -d '{
    "amount": 45000.00,
    "payment_method": "pix"
  }'
```

### Concluir Venda

```bash
curl -X PATCH http://localhost:3000/vendas/1/concluir \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_TOKEN" \
  -d '{
    "payment_method": "financiamento"
  }'
```

---

## 👤 Usuários de Teste (Seed)

Após executar o `sql/script.sql`:

| Email | Senha | Perfil |
|-------|-------|--------|
| admin@mobilityx.com | Admin123 | admin |
| vendedor@mobilityx.com | Seller123 | seller |

**Veículos disponíveis no seed:**
- Toyota Corolla 2023 - R$ 150.000
- Honda Civic 2022 - R$ 140.000
- Volkswagen Golf 2021 - R$ 120.000
- Ford Mustang 2023 - R$ 350.000
- Chevrolet Onix 2024 - R$ 85.000

---

## 🧠 Decisões Técnicas e Trade-offs

### 1. **Arquitetura Modular**
- Cada domínio (User, Vendas, etc.) tem sua própria pasta com Model/Controller/Route
- Facilita manutenção e escalabilidade

### 2. **Vínculo Usuario-Cliente (1:1)**
- Coluna `usuario_id` em `clients` com `UNIQUE`
- `ON DELETE SET NULL` para não perder histórico de vendas

### 3. **Regras de Negócio na Camada Model**
- Transações atômicas para operações críticas (criar venda, cancelar)
- Uso de `FOR UPDATE` para evitar race conditions

### 4. **Auditoria Simplificada**
- Tabela `audit_logs` com JSONB para payload flexível
- Registra ações de venda (criar, concluir, cancelar, pagamento)

### 5. **Validações**
- Email: regex simples
- Senha: mínimo 8 chars, pelo menos 1 letra e 1 número
- Ano do veículo: >= 1990
- Preço: > 0
- Documento: 11 (CPF) ou 14 (CNPJ) dígitos

### 6. **Autorização**
- Middleware `perfispermitidos()` verifica array de roles
- Lógica adicional no controller para restrições por ownership

### 7. **Trade-offs**
- **Sem ORM**: SQL puro para controle total e evitar N+1
- **Sem testes**: Priorizado implementação funcional (pendente)
- **Sem Docker**: Simplificação para MVP
- **Audit log síncrono**: Pode impactar performance em alta escala

---

## 📄 Licença

ISC
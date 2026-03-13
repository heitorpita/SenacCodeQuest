================================================================================
                              AULA 10 - DIA 10
                    PROJETO PRÁTICO 1 + REVISÃO SEMANA 2
================================================================================

HORÁRIO: 13:30 - 17:30 | DATA: _____/_____/_____

OBJETIVOS:
✓ Aplicar todo o conhecimento das semanas 1 e 2
✓ Desenvolver projeto completo de sistema de vendas online
✓ Modelar, criar e popular banco de dados
✓ Criar queries complexas e relatórios

CRONOGRAMA:
13:30-13:45 → Apresentação do projeto
13:45-15:30 → Desenvolvimento (Parte 1)
15:30-15:45 → Intervalo
15:45-17:00 → Desenvolvimento (Parte 2)
17:00-17:30 → Apresentações e Revisão

================================================================================
PROJETO: SISTEMA DE E-COMMERCE COMPLETO
================================================================================

DESCRIÇÃO:
Você foi contratado para desenvolver o banco de dados de uma loja virtual.
O sistema deve gerenciar: categorias, produtos, clientes, pedidos, pagamentos
e avaliações.

================================================================================
ETAPA 1: MODELAGEM (30 min)
================================================================================

Crie o modelo ER (Entidade-Relacionamento) com:

TABELAS OBRIGATÓRIAS:
1. categorias (id, nome, descricao, ativa)
2. produtos (id, nome, descricao, preco, estoque, categoria_id, ativo)
3. clientes (id, nome, email, cpf, telefone, data_cadastro)
4. enderecos (id, cliente_id, rua, numero, cidade, estado, cep, principal)
5. pedidos (id, cliente_id, data_pedido, status, valor_total)
6. itens_pedido (id, pedido_id, produto_id, quantidade, preco_unitario)
7. pagamentos (id, pedido_id, forma_pagamento, valor, data_pagamento, status)
8. avaliacoes (id, produto_id, cliente_id, nota, comentario, data)

RELACIONAMENTOS:
- Categoria 1:N Produtos
- Cliente 1:N Endereços
- Cliente 1:N Pedidos
- Pedido 1:N Itens
- Produto N:N Pedidos (através de itens_pedido)
- Pedido 1:1 Pagamento
- Produto 1:N Avaliações

================================================================================
ETAPA 2: CRIAÇÃO DAS TABELAS (45 min)
================================================================================

-- Exemplo de tabela com constraints completas:
CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(200) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL CHECK (preco > 0),
    estoque INTEGER DEFAULT 0 CHECK (estoque >= 0),
    estoque_minimo INTEGER DEFAULT 10,
    categoria_id INTEGER NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    imagem_url VARCHAR(500),
    
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE RESTRICT
);

REQUISITOS:
✓ Todas as PKs devem ser SERIAL
✓ Usar FKs com ON DELETE/UPDATE apropriados
✓ Adicionar constraints (NOT NULL, CHECK, UNIQUE)
✓ Usar DEFAULT quando fizer sentido
✓ Adicionar índices em colunas de busca frequente

================================================================================
ETAPA 3: POPULAÇÃO DE DADOS (30 min)
================================================================================

Insira dados realistas:
- 5 categorias
- 20 produtos (distribuídos nas categorias)
- 15 clientes
- 20 endereços
- 30 pedidos
- 60 itens de pedido
- 30 pagamentos
- 40 avaliações

DICA: Use transações para inserir tudo de uma vez!

BEGIN;
    INSERT INTO categorias ...;
    INSERT INTO produtos ...;
    -- ... mais inserções
COMMIT;

================================================================================
ETAPA 4: QUERIES OBRIGATÓRIAS (90 min)
================================================================================

Desenvolva as seguintes consultas:

1. RELATÓRIOS BÁSICOS:
   a) Listar todos os produtos com nome da categoria
   b) Total de pedidos por cliente (nome, qtd pedidos, valor total)
   c) Produtos mais vendidos (top 10)
   d) Clientes que nunca fizeram pedidos

2. ANÁLISES:
   a) Média de avaliação por produto
   b) Faturamento total por categoria
   c) Ticket médio por cliente
   d) Produtos com estoque abaixo do mínimo

3. QUERIES COMPLEXAS:
   a) Pedidos do último mês com: cliente, produtos, quantidade, valor
   b) Produtos sem avaliações
   c) Clientes com mais de 3 pedidos e gasto total acima de R$ 1000
   d) Ranking de categorias por faturamento

4. VIEWS:
   a) vw_produtos_completos (produto + categoria + avaliação média)
   b) vw_pedidos_detalhados (pedido + cliente + status pagamento)
   c) vw_estoque_critico (produtos abaixo do mínimo)

5. MATERIALIZED VIEW:
   a) mv_vendas_diarias (vendas por dia com estatísticas)

6. ÍNDICES:
   Criar índices para otimizar as queries mais usadas

================================================================================
ETAPA 5: DESAFIOS EXTRAS (OPCIONAL)
================================================================================

1. CTE RECURSIVA:
   Criar hierarquia de categorias (categoria → subcategoria)

2. TRIGGER:
   Atualizar estoque automaticamente ao inserir item_pedido

3. FUNCTION:
   Calcular valor total do pedido com desconto por quantidade

4. RELATÓRIO DASHBOARD:
   Query única que retorna:
   - Total de vendas hoje/mês/ano
   - Produtos mais vendidos
   - Novos clientes
   - Ticket médio

================================================================================
CRITÉRIOS DE AVALIAÇÃO
================================================================================

□ Modelagem correta (20 pontos)
  - Relacionamentos apropriados
  - Constraints bem definidas
  - Normalização adequada

□ Implementação (30 pontos)
  - Tabelas criadas corretamente
  - Dados inseridos sem erros
  - FKs funcionando

□ Queries (30 pontos)
  - Todas as queries obrigatórias
  - Resultados corretos
  - Código limpo e comentado

□ Views e Índices (10 pontos)
  - Views úteis e corretas
  - Índices apropriados

□ Extras (10 pontos)
  - Triggers/Functions
  - CTEs recursivas
  - Otimizações adicionais

================================================================================
ENTREGA
================================================================================

Criar arquivo SQL único com:
1. DROP das tabelas (se existirem)
2. CREATE das tabelas
3. INSERT dos dados
4. Todas as queries
5. Views e índices
6. Comentários explicativos

Nome do arquivo: projeto1_seunome.sql

================================================================================
DICAS IMPORTANTES
================================================================================

💡 Use comentários:
-- ========================================
-- CRIAÇÃO DA TABELA PRODUTOS
-- ========================================

💡 Teste cada parte antes de continuar

💡 Use transações para segurança

💡 Verifique integridade referencial

💡 Formate código para legibilidade

💡 EXPLAIN nas queries complexas

================================================================================
EXEMPLO DE QUERY COMPLEXA
================================================================================

-- Relatório completo de vendas por categoria
WITH vendas_categoria AS (
    SELECT 
        c.nome AS categoria,
        COUNT(DISTINCT p.id) AS total_pedidos,
        SUM(ip.quantidade) AS unidades_vendidas,
        SUM(ip.quantidade * ip.preco_unitario) AS receita
    FROM categorias c
    INNER JOIN produtos prod ON c.id = prod.categoria_id
    INNER JOIN itens_pedido ip ON prod.id = ip.produto_id
    INNER JOIN pedidos p ON ip.pedido_id = p.id
    WHERE p.status = 'ENTREGUE'
    GROUP BY c.id, c.nome
)
SELECT 
    categoria,
    total_pedidos,
    unidades_vendidas,
    TO_CHAR(receita, 'L999G999G999D99') AS receita_formatada,
    ROUND(receita / total_pedidos, 2) AS ticket_medio,
    ROUND(100.0 * receita / SUM(receita) OVER(), 2) AS percentual
FROM vendas_categoria
ORDER BY receita DESC;

================================================================================
REVISÃO - SEMANA 2 (Dias 6-10)
================================================================================

DIA 6: JOINs
✓ INNER, LEFT, RIGHT, FULL, CROSS, SELF JOIN

DIA 7: Agregações
✓ COUNT, SUM, AVG, MAX, MIN
✓ GROUP BY, HAVING

DIA 8: Subconsultas
✓ Subconsultas em WHERE, FROM, SELECT
✓ EXISTS, IN
✓ CTEs e CTEs recursivas

DIA 9: Views e Índices
✓ VIEW, MATERIALIZED VIEW
✓ Tipos de índices (B-Tree, GIN, GIST)
✓ EXPLAIN, EXPLAIN ANALYZE

DIA 10: Projeto Integrado (HOJE)
✓ Aplicação prática de todo o conteúdo

BOA SORTE NO PROJETO!

TAREFA: Finalizar projeto | PRÓXIMA SEMANA: Conteúdo Avançado

================================================================================
FIM DA AULA 10
================================================================================
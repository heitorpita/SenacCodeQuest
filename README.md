# SenacCodeQuest

Repositório central dos exercícios, desafios e projetos feitos durante o curso Técnico em Informática para Internet no Senac. Contém múltiplos subprojetos (APIs, front-ends, exemplos de POO, SQL, etc.).

**Objetivo:** arquivar o trabalho do curso, facilitar revisões futuras e servir como portfólio de aprendizado.

---

**Como este repositório está organizado**
- **`Desafios/`**: projetos extracurriculares e desafios em Node.js e outros stacks.
- **`UC01-LOGICA/`, `UC02-BACKEND/`, `UC03-BACK&DB/`, `UC04-FRONTEND/`**: pasta por unidade curricular com exemplos e exercícios.
- **`POO/`** e outras pastas com aulas organizadas por tema.
- **`Banco_De_Dados/`**: scripts SQL e exemplos de schema.

Cada subpasta pode ser um projeto independente com seu próprio `package.json` e possivelmente seu próprio `.gitignore`.

---

**Como rodar projetos Node.js nesta coleção**
- Entre na pasta do projeto que deseja executar, por exemplo: `cd Desafios/catalogo_musica_api`
- Instale dependências (se houver): `npm install` ou `pnpm install` ou `yarn`
- Rode com: `npm start` ou `node app.js` — siga o `README.md` local de cada subprojeto para instruções específicas.

Observação: alguns projetos são experimentos didáticos e podem faltar instruções completas; confira o `README` dentro da pasta do subprojeto.

---

**Sobre o `.gitignore` (explicação curta e prática)**
- O arquivo `.gitignore` que fica na raiz do repositório aplica-se a todo o repositório. Padrões como `node_modules/` sem uma barra inicial correspondem a qualquer pasta chamada `node_modules` em qualquer subdiretório, logo todos os `node_modules` serão ignorados por esse padrão.
- Se um `node_modules` já foi versionado (ou seja, já foi commitado antes de o `.gitignore` existir), o `.gitignore` não remove automaticamente esses arquivos do histórico — eles continuam no repositório até serem removidos do índice Git.

Comandos úteis (PowerShell) para detectar e remover `node_modules` já adicionados ao git index:
```powershell
# listar arquivos rastreados que contenham 'node_modules'
git ls-files | Select-String 'node_modules'

# remover do índice (apenas desindexa, não deleta localmente) um node_modules específico
git rm -r --cached path\to\project\node_modules

# para remover todos os node_modules rastreados (exemplo com busca recursiva em PowerShell)
Get-ChildItem -Directory -Recurse -Force -Filter node_modules | ForEach-Object { git rm -r --cached --ignore-unmatch $_.FullName }

# depois commit e push
git commit -m "Remove node_modules do repositório" && git push
```

---

**Boas práticas recomendadas para este repositório**
- Mantenha um `.gitignore` na raiz com padrões gerais (`node_modules/`, `.env`, `dist/`, etc.).
- Projetos que precisam de regras específicas podem ter um `.gitignore` local — as regras se somam (o Git usa a união de padrões).
- Nunca commit arquivos sensíveis como chaves, senhas ou arquivos `.env`. Use variáveis de ambiente ou serviços secretos.

---

Se quiser, eu posso:
- Atualizar/normalizar o `.gitignore` da raiz com um padrão para monorepo.
- Procurar `node_modules` já comitados e gerar comandos para removê-los com segurança.
- Gerar README individuais para subprojetos mais importantes (ex.: `Desafios/catalogo_musica_api`).

Diga qual dessas opções você prefere que eu faça em seguida.

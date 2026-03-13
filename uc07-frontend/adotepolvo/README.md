# Adote Polvo (React)

Aplicação web feita em React e JavaScript para aproximar pessoas interessadas em adoção responsável de polvos. O projeto oferece catálogo com espécies, detalhes do pet, chat para tirar dúvidas e fluxo de adoção.

> As capturas de tela abaixo foram extraídas de protótipos/telas do projeto e servem como referência visual da experiência.

- Login e criação de conta
- Feed com busca, filtros por espécies e cards de polvos
- Detalhe do pet com informações (espécie, idade, tamanho, cor etc.), ação “Adote já” e botão de chat
- Perfil do usuário com preferências, favoritos e notificações

## Principais recursos

- Autenticação (login e link para cadastro)
- Busca com filtros e categorias de espécies
- Lista de polvos com cards e imagens
- Página de detalhes do pet com informações completas e CTA de adoção
- Favoritos e perfis de usuários
- Notificações de chat
- Navegação inferior (home, chat, adicionar, favoritos, perfil)
- Foco em acessibilidade e design responsivo (mobile-first)

## Tecnologias

- React (JavaScript)
- React Router (rotas) — se aplicável
- Context API ou bibliotecas de estado — se aplicável
- Fetch/Axios para consumo de API — se aplicável
- CSS/SCSS/Tailwind/Styled-Components — conforme adotado no projeto

> Observação: Caso o projeto use Vite, os comandos de execução/variáveis usarão o prefixo VITE_. Se for Create React App, ajuste os comandos conforme seu `package.json`.

## Requisitos

- Node.js 18+ (recomendado)
- npm 9+ ou yarn 1.x/berry

## Começando

1. Clone o repositório
   ```bash
   git clone https://github.com/heitorpita/adotepolvo-react.git
   cd adotepolvo-react
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure variáveis de ambiente (se houver)
   - Crie um arquivo `.env` (ou `.env.local`) copiando do exemplo, se existir.
   - Exemplos comuns (ajuste conforme o projeto):
     ```
     VITE_API_BASE_URL=http://localhost:3333
     VITE_ENABLE_MOCKS=false
     ```

4. Rode em desenvolvimento
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Build de produção
   ```bash
   npm run build
   npm run preview
   # ou
   yarn build && yarn preview
   ```

## Scripts úteis

- `dev`: executa a aplicação em modo desenvolvimento
- `build`: gera o build para produção
- `preview`: serve o build localmente para conferência
- `lint` e `format`: (se configurados) verificam e formatam o código
- `test`: (se configurado) roda a suíte de testes

Confira o `package.json` para a lista completa de scripts disponíveis.

## Estrutura sugerida

A estrutura abaixo é apenas uma referência. Adapte à organização atual do repositório.

```
src/
  assets/        # imagens, ícones, fontes
  components/    # componentes reutilizáveis (Botões, Inputs, Cards, etc.)
  pages/         # páginas (Login, Home, PetDetails, Profile, Favorites...)
  routes/        # configuração de rotas
  services/      # APIs/axios, clients REST/GraphQL
  hooks/         # hooks customizados
  context/       # Context API (AuthContext, ThemeContext, etc.)
  utils/         # helpers, formatadores, máscaras
  styles/        # estilos globais, temas
  mocks/         # dados mockados (se houver)
```

## Acessibilidade

- Ícone de acessibilidade na interface
- Contraste de cores e tipografia legível
- Componentes com foco/estado visível
- Navegação pensada para mobile-first

Sinta-se à vontade para abrir issues com sugestões de melhorias de A11y.

## Capturas de tela

Adicione as imagens ao repositório (por exemplo, em `docs/screens/`) e atualize os caminhos abaixo:

```
![Tela de Login](docs/screens/login.png)
![Home / Feed](docs/screens/home.png)
![Detalhe do Pet](docs/screens/pet-details.png)
![Perfil do Usuário](docs/screens/profile.png)
```

As telas de referência incluem:
- Login com campos de e-mail e senha (Imagem 1)
- Perfil com opções de conta, idioma e notificações (Imagem 2)
- Detalhe do polvo com informações completas e botões de Chat e Adote já (Imagem 3)
- Home com busca, categorias de espécies e recomendações (Imagem 4)

## Roadmap

- [ ] Fluxo completo de cadastro
- [ ] Persistência de favoritos
- [ ] Chat em tempo real
- [ ] Internacionalização (i18n)
- [ ] Testes (unitários e e2e)
- [ ] Melhorias de acessibilidade

## Contribuindo

1. Faça um fork do projeto
2. Crie sua branch de feature: `git checkout -b feat/minha-feature`
3. Commit suas mudanças: `git commit -m "feat: adiciona minha feature"`
4. Faça push: `git push origin feat/minha-feature`
5. Abra um Pull Request

Relate bugs e ideias em Issues — descrições e passos de reprodução ajudam muito.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE (se existente) para mais detalhes.

## Autor

- Heitor Pita — @heitorpita

---
Se precisar, eu posso abrir um Pull Request adicionando este README ao repositório.
# Event Site

Um site de eventos construído com **Vite + React**!

## 📚 Sobre o Projeto

O **Event Site** é uma aplicação web simples e moderna que exibe uma lista de eventos, cada um com imagem, título, data, local e descrição. O objetivo é servir como base para projetos de portfólio, estudos de React ou como ponto de partida para sites de eventos reais.

## ✨ Funcionalidades

- Listagem dinâmica de eventos
- Componentização com React (Card, ListEvents, Header, Footer, Main, etc.)
- Estilização modular com CSS Modules
- Responsivo e visual moderno

## 🖼️ Estrutura de Pastas

```
src/
  components/
    Header/
    Footer/
    Main/
    EventCard/
    ListEvents/
  pages/
    EventPage/
```

Cada componente possui seu próprio arquivo `.jsx` e módulo CSS.

## 🚀 Como rodar o projeto

1. **Clone** este repositório:
   ```bash
   git clone https://github.com/seu-usuario/event-site.git
   cd event-site
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. Acesse em seu navegador:  
   [http://localhost:5173](http://localhost:5173)

## 🛠️ Tecnologias Utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 📦 Exemplo de Evento

Cada evento exibe:

- **Título**
- **Data**
- **Local**
- **Descrição**
- **Imagem**

Exemplo de uso do componente:

```jsx
<Card 
  titulo="Rock in Rio 2026"
  data="05/09/2026"
  local="Parque Olímpico, Rio de Janeiro"
  descricao="O maior festival de música e entretenimento do mundo retorna ao Rio de Janeiro para mais uma edição histórica..."
  img="https://exemplo.com/imagem.jpg"
/>
```

## 👨‍💻 Autor

Desenvolvido por [Heitor Pita](https://github.com/heitorpita)

---

Sinta-se à vontade para contribuir, sugerir melhorias, ou adaptar este projeto para suas necessidades!
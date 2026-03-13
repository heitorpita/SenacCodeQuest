# UC08 — React Native

Desenvolvimento de aplicativos mobile com React Native e Expo.

## Projetos

| Pasta | Projeto | Descrição |
|-------|---------|-----------|
| [meuAppAula01](./meuAppAula01/) | App Aula 01 | Primeiro projeto React Native — introdução ao Expo |
| [frasesApp](./frasesApp/) | App de Frases Motivacionais | Exibe frases motivacionais aleatórias |
| [alcoolGasolinaApp](./alcoolGasolinaApp/) | Álcool ou Gasolina | Calcula qual combustível é mais vantajoso |
| [imcApp](./imcApp/) | Calculadora de IMC | Calcula o Índice de Massa Corporal |

## Como Criar um Novo Projeto

```bash
npx create-expo-app meuApp --template blank
cd meuApp
code .
```

## Como Executar

```bash
# Android
npm run android

# iOS
npm run ios

# Web (para desenvolvimento)
npm run web
```

> Ao executar pela primeira vez no modo web, instale as dependências adicionais:
> ```bash
> npx expo install react-dom react-native-web
> ```

## Tecnologias

- React Native
- Expo
- JavaScript

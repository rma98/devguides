# Meu Primeiro Projeto React com Vite

Este projeto é uma aplicação React desenvolvida com Vite, utilizando HMR (Hot Module Replacement) e algumas regras do ESLint para manter o código limpo e eficiente.

## Tecnologias Utilizadas
- **Vite**: Ferramenta de build rápida para projetos frontend.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router**: Gerenciamento de rotas para navegação entre páginas.
- **Styled Components**: Estilização baseada em componentes.
- **React Icons**: Biblioteca de ícones para React.
- **ESLint**: Ferramenta de análise estática para manter o código padronizado.

## Conteúdo do Projeto
O projeto contém um menu fixo que permite navegar entre os guias disponíveis:

- 📘 **Guia React**: Conceitos e práticas essenciais do React.
- 📱 **Guia React Native**: Passos para instalação e configuração do React Native.
- 📗 **Guia Vue.js**: Introdução e comparação com React.
- 🖥 **Guia de Comandos**: Comandos úteis para desenvolvimento.
- 🔧 **Comandos Git**: Comandos essenciais para versionamento de código.
- ℹ️ **Sobre Mim**: Informações sobre o desenvolvedor.

## Criando um Projeto com Vite
Com o comando abaixo, podemos escolher qual tipo de projeto criar, como: Vanilla, Vue, React, Preact, Lit, Svelte, Solid, Qwik, Angular, Others...

```sh
npm create vite .
```

## Criando um Projeto React Native
Como o Vite não suporta React Native, o processo é diferente. Podemos criar um projeto de duas formas:

### 1️⃣ Usando Expo (Recomendado para iniciantes)
```sh
npm install -g expo-cli
npx create-expo-app my-app
cd my-app
npm start
```

### 2️⃣ Usando React Native CLI (Para mais controle)
```sh
npx react-native init MyApp
cd MyApp
npx react-native run-android # Para rodar no Android
npx react-native run-ios     # Para rodar no iOS
```

## Como Rodar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/rma98/meuprimeiroprojetoreactvite.git
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd meuprimeiroprojetoreactvite
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

O projeto estará disponível em `http://localhost:5173/`.

## Deploy no GitHub Pages
O projeto foi configurado para ser hospedado no GitHub Pages. Acesse em:
🔗 [meuprimeiroprojetoreactvite](https://rma98.github.io/meuprimeiroprojetoreactvite/)

## Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests para melhorias!

---
🚀 Desenvolvido por **Robson Albuquerque**.

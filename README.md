# CP1_2TRI_WebDev_Criando-o-novo-TV-Time

# 🎬 TV Time

Projeto desenvolvido para a disciplina de **Web Development** da **FIAP**, utilizando React, TypeScript e integração com a API do TMDB.

A aplicação permite pesquisar e visualizar informações sobre filmes, além de salvar filmes como favoritos.

## 🚀 Tecnologias utilizadas

* React
* TypeScript
* Vite
* React Router
* TMDB API
* HTML
* CSS
* JavaScript/TypeScript
* Git e GitHub

## 📌 Funcionalidades

* 🔎 Pesquisa de filmes
* 🎬 Visualização de filmes
* 📄 Página de detalhes do filme
* ⭐ Sistema para salvar filmes
* 🔄 Consumo de dados através da API do TMDB
* 🧭 Navegação entre páginas utilizando React Router
* 📱 Interface responsiva

## 📂 Estrutura do projeto

```text
src/
├── components/
├── pages/
│   ├── Home.tsx
│   └── Details.tsx
├── services/
│   └── tmdb.ts
├── App.tsx
└── main.tsx
```

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd nome-do-projeto
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npm run dev
```

Depois, acesse o endereço informado pelo Vite no terminal, normalmente:

```text
http://localhost:5173
```

## 🔑 API

O projeto utiliza a **TMDB API** para obter informações sobre filmes.

Para utilizar a API, é necessário configurar uma chave de acesso no projeto.

Exemplo de variável de ambiente:

```env
VITE_TMDB_API_KEY=sua_chave_aqui
```

## 🎓 Projeto acadêmico

Este projeto foi desenvolvido como parte das atividades acadêmicas do curso de **Engenharia de Software — FIAP**.

**Aluno:** Luiz Gonzaga de Cerqueira
**Curso:** Engenharia de Software
**Disciplina:** Web Development

## 📄 Licença

Projeto desenvolvido para fins acadêmicos e de aprendizado.

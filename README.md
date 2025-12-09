# 📚 Projeto API com Node.js

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)
![Node](https://img.shields.io/badge/Node.js-v20-green)

Este é um projeto **Fullstack** (Backend + Frontend) desenvolvido individualmente como parte dos meus estudos em desenvolvimento web. O objetivo é criar uma aplicação que serve páginas estáticas e fornece uma API para gerenciamento de dados (Livros).

## 🚀 Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework para gerenciar rotas e servidor.
* **MongoDB & Mongoose**: Banco de dados e modelagem de dados.
* **HTML/CSS/JS**: Frontend "Vanilla" (Puro) servido estaticamente.
* **GitHub Actions**: Automação de testes (CI).

## 📂 Estrutura do Projeto

O projeto segue uma arquitetura monolítica (tudo em um):

* `/api`: Contém a lógica do Backend (Controllers, Models, Rotas).
* `/public`: Contém o Frontend (Páginas HTML, Estilos CSS e Scripts JS).
* `server.js`: Ponto de entrada da aplicação.

## 🛠️ Como rodar o projeto localmente

Siga os passos abaixo para testar na sua máquina:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** e o **Git** instalados.

### 2. Clonar o repositório

```bash
git clone https://github.com/alefHugo03/SiteComJS.git
cd SiteComJS
```

### 3. Instalar dependências
```bash
npm install
```

### 4. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione sua string de conexão (se houver banco de dados):
```bash
DB_CONNECTION_STRING=sua_string_do_mongodb_aqui
PORT=3000
```

### 5. Iniciar o Servidor
```bash
# Para rodar em produção
npm start

# Ou se estiver desenvolvendo (e tiver o nodemon instalado)
npm run dev
```

### 🧪 Testes
O projeto conta com integração contínua (CI) via GitHub Actions. Para rodar os testes localmente:
```bash
npm test
```



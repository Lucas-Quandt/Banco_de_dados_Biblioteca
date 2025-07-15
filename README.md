# 📚 Sistema de Gerenciamento de Livros com Node.js e SQL (CRUD)

Bem-vindo ao meu projeto de gerenciamento de biblioteca! Este repositório demonstra a construção de um **sistema de gerenciamento de livros** utilizando **Node.js** para a lógica de backend e **SQL** para a persistência dos dados. O objetivo principal é ilustrar as operações fundamentais de um banco de dados, conhecidas como **CRUD** (Create, Read, Update, Delete), aplicadas a um cenário de biblioteca.

---

## 💡 Sobre o Projeto

Neste projeto, você encontrará uma solução prática para gerenciar informações de livros de forma eficiente. Ele foi desenvolvido com base em uma série de atividades que simulam os desafios comuns no dia a dia de uma biblioteca, desde a inserção de novos títulos até a organização e busca por obras específicas.

O sistema permite:

* **Cadastrar Novos Livros**: Adicionar novas entradas à sua coleção, com detalhes como título, autor, ano de publicação e disponibilidade.
* **Consultar o Catálogo**: Visualizar todos os livros disponíveis ou buscar títulos específicos com base em diversos critérios, como autor ou ano de publicação.
* **Atualizar Informações**: Modificar dados de livros já existentes, como alterar o status de disponibilidade ou corrigir o ano de publicação.
* **Remover Livros**: Excluir títulos do catálogo quando necessário.

---

## 🚀 Funcionalidades Principais

As funcionalidades deste projeto abrangem as seguintes operações cruciais para um sistema de banco de dados, seguindo as diretrizes da atividade proposta:

* **Questão 1: Criação da Estrutura da Tabela**
    * Definição de uma tabela `livros` com campos essenciais: `id` (chave primária autoincremento), `titulo` (obrigatório), `autor`, `ano_publicacao` e `disponivel`.

* **Questão 2: Inclusão de Dados Iniciais**
    * Inserção de três livros de exemplo no catálogo: "Dom Casmurro", "O Pequeno Príncipe" e "1984".

* **Questão 3: Listagem de Livros Disponíveis**
    * Consulta para exibir apenas os livros que estão marcados como disponíveis.

* **Questão 4: Busca por Título Específico**
    * Funcionalidade para encontrar um livro pelo seu título exato, por exemplo, "1984".

* **Questão 5: Atualização de Disponibilidade**
    * Modificação do status de disponibilidade de um livro específico (e.g., alterar "1984" para disponível).

* **Questão 6: Atualização de Ano de Publicação**
    * Atualização do ano de publicação de um livro (e.g., mudar o ano de "O Pequeno Príncipe").

* **Questão 7: Remoção de Livro por ID**
    * Exclusão de um livro do catálogo com base em seu identificador único.

* **Questão 8: Listagem Ordenada por Ano**
    * Consulta para exibir todos os livros ordenados do mais antigo para o mais novo pelo ano de publicação.

* **Questão 9: Contagem de Livros Disponíveis**
    * Determinação da quantidade total de livros que estão marcados como disponíveis.

* **Questão 10: Busca Parcial por Autor**
    * Recurso para encontrar livros cujos autores contenham uma palavra ou frase específica, como "George".

---

## 💻 Tecnologias Utilizadas

* **Node.js**: O ambiente de execução JavaScript que orquestra as operações do banco de dados e a lógica da aplicação.
* **SQL**: A linguagem padrão para interagir com o banco de dados, responsável pela criação, manipulação e consulta dos dados dos livros.

---

## ⚙️ Como Rodar o Projeto

Para testar e explorar este sistema em sua máquina local:

1.  **Clone este repositório:**
    ```bash
    git clone <https://github.com/Lucas-Quandt/Banco_de_dados_Biblioteca.git>
    ```
2.  **Acesse o diretório do projeto:**
    ```bash
    cd <Banco_de_dados_Biblioteca>
    ```
3.  **Instale as dependências:**
    ```bash
    npm install ou yarn install 
    npm install sqlite3
    ```
4.  **Execute o script principal:**
    Isso iniciará a aplicação e executará as operações CRUD demonstradas.
    ```bash
    node biblioteca.js
    ```
---

## 🤝 Contribuição

Este projeto é um excelente ponto de partida para entender as operações básicas de banco de dados. Sinta-se à vontade para explorar o código, adaptá-lo às suas necessidades ou até mesmo sugerir melhorias! Suas contribuições são sempre bem-vindas.

---

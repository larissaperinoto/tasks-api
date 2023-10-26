# Tasks API

### Descrição

API REST que permite criar, atualizar, buscar e deletar tarefas.

### Tecnologias e Ferramentas

<div>
  <img src="https://img.shields.io/badge/adonis%20js-220052?style=for-the-badge&logo=adonisjs&logoColor=white" alt="Adonis.js" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

</br>

O projeto foi desenvolvido utilizando:
- [Adonisjs](https://adonisjs.com/)
- [Postgres](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Rodando o projeto

***Obs.:*** para rodar o projeto localmente é necessário ter o Node.js instalado. Também é necessário ter o banco de dados Postgres ou o Docker instalado.

Para rodar o projeto na sua máquina, inicie fazendo o clone deste repositório com o comando abaixo.

      git clone git@github.com:larissaperinoto/tasks-api.git
    
Instale as dependências.

     npm install
      
#### Rodando com o Postgres local

Caso possua o Postgres instalado em sua máquina, faça a substituíção das propriedades **PG_USER** e **PG_PASSWORD** no arquivo .env.

#### Rodando com o Postgres no container

Suba um container com o Postgres utilizando o comando abaixo.

    docker run -it --name postgresss -e POSTGRES_PASSWORD=postgres -p 5432:5432  postgres

Caso queira usar um password diferente é necessário inserir a alteração no arquivo .env na propriedade **PG_PASSWORD**.

Inicie a aplicação com o comando abaixo.

    node ace serve --watch

### Documentação

Acesse a documentação das rotas disponíveis na API através da rota /docs.

---

Developed by [Larissa Perinoto](https://larissaperinoto.com.br/), © 2023.

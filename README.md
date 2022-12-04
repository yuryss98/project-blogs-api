# Boas vindas ao repositório do projeto blogs-api!

---

Neste projeto tive que desenvolver uma API e um banco de dados para a produção de conteúdo para um blog!

A aplicação foi desenvolvida em Node.js usando o pacote sequelize para fazer um CRUD de posts;

A Api foi desenvolvida seguindo a arquitetura de software de camadas MSC (Model Service Controller);

Desenvolvi endpoints que estão conectados ao banco de dados seguindo os princípios do REST;


## 🛠 Tecnologias usadas:

* JavaScript;
* Docker;
* Express;
* Node;
* Mysql;
* Sequelize

## Execute localmente:

Clone o projeto
```bash
  git@github.com:yuryss98/project-blogs-api.git
```

Vá para o diretório do projeto:
```bash
  cd project-blogs-api
```

Entre no Vs Code para verificar os arquivos usando o atalho no terminal:
```bash
  code .
```

Abra O terminal e execute os comandos:
```bash
-- docker-compose up -d --build
```

```bash  
-- docker exec -it blogs_api bash
```

```bash
-- npm install
```

```bash
-- npm start
```

## Depois de executar todos os comandos, ja teremos uma aplicação rodando na porta 3000, e um banco de dados criado e populado, com isso estamos prontos para consumir os devidos endpoints!!

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

## Endpoints: todos os endpoints são acessiveis a partir da rota http://localhost:3000
  
  <details close>
  <summary>POST /login</summary>
  
  -- O método POST em /login quando executado com um email e senha corretos retorna um token, token esse que é usado para poder acessar outras rotas da api, aceita 2 campos sendo eles:
  
  -- email: campo do tipo texto, tem que ser um email no formato valido exemplo => "lewishamilton@gmail.com" - CAMPO OBRIGATORIO;
  
  -- password: campo do tipo texto, tem que ser de no minimo 6 caracters exemplo => "123456" - CAMPO OBRIGATORIO;
  
  ```json
      {
        "email": "lewishamilton@gmail.com",
        "password": "123456"
      }
  ```
  
  </details>
  
  <details close>
  <summary>POST /user</summary>
  -- O método POST em /user é usado para criar um usuario, quando criado com sucesso retorna um token, token esse que é usado para poder acessar outras    rotas da api, aceita 4 campos sendo eles:
  
    -- displayName: campo do tipo texto de no minimo 8 caracters - CAMPO OBRIGATORIO;
    
    -- email: campo do tipo texto, tem que ser um email no formato valido => exemplo@exemplo.com - CAMPO OBRIGATORIO;
    
    -- password: campo do tipo texto de no minimo 6 caracters - CAMPO OBRIGATORIO;
    
    -- image: campo do tipo texto, aqui pode colocar a url de alguma imagem - CAMPO NÃO OBRIGATORIO;
  
  ```json
      {
        "displayName": "testando",
        "email": "teste@teste.com",
        "password": "123456",
        image: ""
      }
  ```
  
  </details>
  

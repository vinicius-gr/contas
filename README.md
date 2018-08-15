# Contas

#### Apresentação

Uma aplicação para gerenciamento de contas a pagar e a receber.

#### Descrição

Este projeto encontra-se divido em 2 frentes:

- Uma API REST com endpoints CRUD para consumo final.
- Um cliente Angular que consome os recursos disponibilizados pela API e os apresenta de forma amigável ao usuário.

Os códigos do cliente front-end estão localizados em [\server\src\main\client](https://github.com/vinicius-gr/contas/tree/master/server/src/main/client).

A API foi desenvolvida em JAVA, utilizando os frameworks Spring 4.3.10 e Hibernate 5.2.11 e realiza persistência em banco MySQL.
O cliente foi desenvolvido em Angular Versão 6.0.7 e Bootstrap 4.

#### Instruções para executar a aplicação.

##### 1. Instale as dependêcias:
- *[MySQL](https://dev.mysql.com/downloads/mysql/) - Instalar e configurar*
- *[Maven](https://maven.apache.org/download.cgi) - Adicionar ao PATH*
- *[Node e NPM](https://nodejs.org/en/download/) - Adicionar NPM ao PATH*
- *[Angular 6](https://angular.io/guide/quickstart)*

##### 2. Abra a linha de comando

##### 3. Clone este repositório
```
git clone https://github.com/vinicius-gr/contas
```
##### 4. Execute o script DumpMySQL.sql da raiz do diretório para criar a base de dados, a tabela e popular com registros.

##### 5. Altere o arquivo db.properties, localizado em [/server/src/main/resources](https://github.com/vinicius-gr/contas/blob/master/server/src/main/resources/db.properties), e altere as propriedades mysql.url, mysql.user e mysql.password para estarem de acordo com o que foi configurado em seu ambiente.

##### 6. Execute os comandos

```
mvn package
mvn tomcat7:run
```

##### 7. Acesse a aplicação em [localhost:8080/server/ng/index.html](localhost:8080/server/ng/index.html)

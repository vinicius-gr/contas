# Contas Manager

#### Apresentação

Uma aplicação para gerenciamento de contas a pagar e a receber.

#### Descrição

Este projeto encontra-se divido em 2 frentes:

+ Uma API REST com endpoints CRUD para consumo final.
+ Um cliente Angular que consome os recursos disponibilizados pela API e os apresenta de forma amigável ao usuário.

As duas frentes encontram-se prontas para deploy, sendo que a API encontra-se em um package war localizado em [\api\target\](https://github.com/vinicius-gr/contas-manager/blob/master/api/target/desafio-contas-sankhya-0.0.1-SNAPSHOT.war) e o cliente possui seus arquivos minificados e construídos localizados em [\client\dist](https://github.com/vinicius-gr/contas-manager/tree/master/client).

A fim de promover uma melhor modularização, separação de responsabilidades e escalabilidade da aplicação, as duas frentes são independentes entre si e portanto executam de forma independente uma da outra. 

A API foi desenvolvida em JAVA, utilizando os frameworks Spring 4.3.10 e Hibernate 5.2.11 e realiza persistência em banco MySQL.
O cliente foi desenvolvido em Angular Versão 6.0.7 e Bootstrap 4.

Instrução para executar a aplicação.

Obs: Assume-se que o MySQL já esteja e configurado.

Clone este repositório
git clone https://github.com/vinicius-gr/contas-manager

Execute o script DumpMySQL.sql para criar a base de dados, a tabela e popular com registros.

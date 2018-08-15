CREATE DATABASE  IF NOT EXISTS `controle-financeiro`;

USE `controle-financeiro`;

DROP TABLE IF EXISTS `conta`;

CREATE TABLE `conta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(75) NOT NULL,
  `vencimento` date DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `tipo` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `conta` WRITE;

INSERT INTO `conta` VALUES 	(1,'Energia CEMIG','2018-08-20',1120.56,1),
							(2,'Conta de Agua','2018-09-01',648.10,1),
							(3,'Serviço Prestado', '2018-07-30', 4199.89, 0),
							(4,'Aluguel','2018-08-30',6500.96,1),
							(5,'Projeto de contas','2018-08-14',6500.96,0);

UNLOCK TABLES;
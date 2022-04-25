set sql_safe_updates = 0;

DROP DATABASE IF EXISTS DBUSUARIO;

CREATE DATABASE DBUSUARIO;

USE DBUSUARIO;

CREATE TABLE USUARIO (
	IDUSUARIO INT NOT NULL AUTO_INCREMENT,
    NOME VARCHAR(100) NOT NULL,
    TELEFONE VARCHAR(11),
    EMAIL VARCHAR(100) NOT NULL,
    SENHA VARCHAR(32) NOT NULL,
    CPF CHAR(11) NOT NULL,
    PRIMARY KEY(IDUSUARIO)
	
);

INSERT INTO
	USUARIO (IDUSUARIO, NOME, TELEFONE, EMAIL, SENHA, CPF)
VALUES
	(1, 'FABRICIO', '48991164956', 'fabriciozed@gmail.com', 'zedapelao123', '89765470912');
    
INSERT INTO
	USUARIO (IDUSUARIO, NOME, TELEFONE, EMAIL, SENHA, CPF)
VALUES
	(2, 'LUCAS', '48991164959', 'LUCAS@gmail.com', 'zeda4123', '79765470912');

INSERT INTO
	USUARIO (IDUSUARIO, NOME, TELEFONE, EMAIL, SENHA, CPF)
VALUES
	(3, 'CAIO', '48991164950', 'CAIO@gmail.com', 'zeda41223', '79565470912');
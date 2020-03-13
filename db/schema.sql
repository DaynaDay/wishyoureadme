CREATE DATABASE book_wish_db;
USE book_wish_db;

CREATE TABLE poetry
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	title VARCHAR(255) NOT NULL,
	PRIMARY KEY (id),
);


CREATE TABLE sci-fi
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	title VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE romance
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	title VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE biographical
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	title VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE mystery
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	title VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);
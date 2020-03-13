CREATE DATABASE book_wish_db;
USE book_wish_db;

CREATE TABLE books 
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	title VARCHAR(255) NOT NULL,
	category VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);
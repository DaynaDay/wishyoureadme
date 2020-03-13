CREATE DATABASE book_wish_db;
USE book_wish_db;

CREATE TABLE pbooks
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	title VARCHAR(255) NOT NULL,
	catergory VARCHAR(255),
	PRIMARY KEY (id),
);



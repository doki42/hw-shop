DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS users;

CREATE TABLE product (
	id int IDENTITY(1,1) PRIMARY KEY,
	name VARCHAR(255),
	price INT,
	picture VARCHAR,
	active BIT,
	);

CREATE TABLE users (
	id int IDENTITY(1,1) PRIMARY KEY,
	email VARCHAR(255),
	password VARCHAR,
	);

INSERT INTO users (email, password) VALUES
	('teszt.bela@onliveit.hu', 'teszTEset7!');

INSERT INTO product (name, price, picture, active) VALUES
	('model 3', 35000, 'images/charlie-deets-AkgALppFIwo-unsplash.jpg', 1),
	('model y', 40000, 'images/tyler-casey-Zn7gb942k90-unsplash.jpg', 1),
	('model s', 66000, 'images/tesla-fans-schweiz-2swaWy4Xhb0-unsplash.jpg', 0),
	('model x', 70000, 'images/matias-malka-ZXsn3BYo_Xk-unsplash.jpg', 1)
	;
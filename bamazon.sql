DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products (
  id INT AUTO_INCREMENT,
  item_id VARCHAR(100) NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price double default 0,
  stock_quanity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0001", "Apple", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0002", "Cookies", "Food", .5, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0003", "Oranges", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0004", "Pears", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0005", "Salt", "Food", 2, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0006", "Plums", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0007", "Cherries", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0008", "Limes", "Food", .50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0009", "Oranges", "Food", 1, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quanity)
VALUES ("0010", "Banana", "Food", 4, 100);
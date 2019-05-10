DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

 

 CREATE TABLE product (
     item_id INT NOT NULL,
     product_name VARCHAR (30) NULL,
     department_name VARCHAR (30) NULL,
     price DECIMAL (10,2) NULL,
     stock_quantity INTEGER (10)
 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "watch", "accessories", 89.99, 0);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "headphones", "electronics", 18.06, 45);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "necklace", "accessories", 10.00, 210);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "camera", "electronices", 399.00, 12);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (3,"socks", "clothing", 2.99, 320);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "tv", "electronics", 289.99, 15);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "curtains", "home decor", 20.50, 44);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "shampoo", "beauty and health", 89.99, 5);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "jacket", "clothing", 40.29, 67);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "carpet", "home decor", 39.89, 16);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "mascara", "beauty and health", 9.99, 500);


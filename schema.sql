DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products
(
    item_id INTEGER
    AUTO_INCREMENT,
    product_name VARCHAR
    (255) NOT NULL,
    department_name VARCHAR
    (255) NOT NULL,
    price DECIMAL NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY
    (item_id)
);
    INSERT INTO products
        (product_name,department_name,price,stock_quantity)
    VALUES
        ("Nike", "Shoes", 199.99, 1000),
        ("Addidas Jacket", "Clothes", 100.00, 2000),
        ("iPhoneX", "Technology", 900.00, 1000),
        ("Eloquent JavaScript", "Technology", 24.99, 45),
        ("GalaxyS10", "Electronics", 800.00, 20),
        ("iPad", "Electronics", 700.00, 30),
        ("Understanding JavaScript", "Education", 35.00, 120),
        ("Tic-tacs", "Food", 1.00, 100000),
        ("MacAir", "Electronics", 1200, 50),
        ("Samsung Galaxy", "Electronics", 800.00, 40);


CREATE DATABASE swiftclean;
USE swiftclean;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
/*CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  service_name VARCHAR(100) NOT NULL,
  price_small DECIMAL(10, 2) NOT NULL,
  price_medium DECIMAL(10, 2) NOT NULL,
  price_large DECIMAL(10, 2) NOT NULL
);
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  car_type VARCHAR(50) NOT NULL,
  services VARCHAR(255) NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO services (service_name, price_small, price_medium, price_large) VALUES
('Wash & Dry', 70.00, 80.00, 100.00),
('Wash, Dry & Tyre shine', 90.00, 110.00, 130.00),
('Wash & Wax', 150.00, 170.00, 190.00),
('Base interior Vacuum/Wash', 190.00, 190.00, 190.00),
('Polymer Wax With Clay', 300.00, 350.00, 400.00),
('Deluxe Wash/Wheel/Tires', 110.00, 130.00, 150.00),
('Dent Removal', 20.00, 25.00, 30.00);*/
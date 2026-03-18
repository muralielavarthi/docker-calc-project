CREATE DATABASE IF NOT EXISTS calcdb;

USE calcdb;

-- Create table
CREATE TABLE IF NOT EXISTS results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  num1 INT,
  num2 INT,
  result INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO results (num1, num2, result) VALUES
(1, 2, 3),
(5, 10, 15),
(7, 8, 15);
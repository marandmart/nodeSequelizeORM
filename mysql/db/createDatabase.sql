-- createDatabase.sql

-- Create the 'school' database if it doesn't exist
CREATE DATABASE IF NOT EXISTS english_school;

-- Use the 'school' database
USE english_school;

-- Create the 'student' table
-- CREATE TABLE IF NOT EXISTS people (
--     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     p_name VARCHAR(200) NOT NULL,
--     is_active BOOL NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     p_role VARCHAR(70) NOT NULL
-- );

-- Create the 'grade' table
-- CREATE TABLE IF NOT EXISTS grade (
--     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     class_description VARCHAR(255) 
-- );

-- Create the 'class' table
-- CREATE TABLE IF NOT EXISTS class (
--     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     teacher_id INT NOT NULL,
--     date_start DATETIME NOT NULL,
--     level_id INT NOT NULL,
--     FOREIGN KEY (teacher_id) REFERENCES people(id),
--     FOREIGN KEY (level_id) REFERENCES grade(id)
-- );

-- Create the 'enrollment' table
-- CREATE TABLE IF NOT EXISTS enrollment (
--     id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     curr_status VARCHAR(50) NOT NULL,
--     s_id INT NOT NULL,
--     class_id INT NOT NULL,
--     FOREIGN KEY (s_id) REFERENCES people(id),
--     FOREIGN KEY (class_id) REFERENCES class(id)
-- );
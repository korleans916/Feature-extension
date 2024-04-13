--
-- Drop Tables
--

SET foreign_key_checks = 0;
DROP TABLE if exists items;
SET foreign_key_checks = 1;

--
-- Create Tables
--
CREATE TABLE `users`(
	`id` INT NOT NULL AUTO_INCREMENT, 
	`username` VARCHAR(255) NOT NULL, 
	`password` VARCHAR(255) NOT NULL, 
	PRIMARY KEY (id)
);

--
-- Insert test data
-- 
INSERT INTO users ('id', 'password') VALUES ('keo916', 'matchalatte');

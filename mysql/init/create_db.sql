DROP DATABASE IF EXISTS `test`;
CREATE DATABASE `test`;
USE `test`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `email` TEXT,
  `password` TEXT,
  `create_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
);
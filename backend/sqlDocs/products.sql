CREATE TABLE `onlinestore`.`new_table` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(45) NOT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `product_description` VARCHAR(45) NOT NULL,
  `price` FLOAT NOT NULL,
  `size` VARCHAR(3) NOT NULL,
  `img_urls` VARCHAR(100) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`product_id`));

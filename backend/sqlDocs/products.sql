CREATE TABLE `aaronoqu_onlinestore`.`products` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `sku` VARCHAR(45) NOT NULL,
  `product_name` VARCHAR(45) NOT NULL,
  `product_description` VARCHAR(45) NOT NULL,
  `price` FLOAT NOT NULL,
  `size` VARCHAR(3) NOT NULL,
  `img_urls` VARCHAR(300) NOT NULL,
  `brand` VARCHAR(45) NOT NULL,
  `clothing_type` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `apparel_type` VARCHAR(45) NOT NULL,
  `top_bottom` VARCHAR(10),
  PRIMARY KEY (`product_id`));




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
  PRIMARY KEY (`product_id`));



INSERT INTO Products (sku, product_name, product_description, price, size, img_urls, brand, clothing_type, gender, color, apparel_type)
VALUES (888, 'Grey T Shiry', 'Nice quality grey T', 29, 'm', 'https://cdn.karmaloopassets.com/media/catalog/product/cache/image/1200x1200/e9c3970ab036de70892d86c6d221abfe/1/c/1c774701206f4c7e4f90ee8af9468d31.jpg','alexander wang','shirt','gender', 'blue','clothing');
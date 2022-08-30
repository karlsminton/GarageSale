/*
 * TODO products
 *
 * Implement seller_id as a foreign key when users are created
 * Separate products table into products and `instances` where products have the universal data, and instances have individual sellers data ie: condition, sellers description etc etc
 */
DROP TABLE IF EXISTS `products`;

CREATE TABLE products (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `name` varchar(126) NOT NULL,
  `image` varchar(256),
  `price` decimal(10, 2) DEFAULT NULL,
  `condition` int(1) NOT NULL,
  `description` text NOT NULL,
  `barcode` varchar(126) NOT NULL,
  `seller_id` int(10)
);

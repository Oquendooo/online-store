CREATE TABLE users (
    user_id int auto_increment primary key,
    email varchar(100) unique,
    password varchar(100)
);
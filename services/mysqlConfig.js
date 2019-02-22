const mysql = require('mysql');
const dotenv = require("dotenv").config();

const connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DB,
        password: process.env.MYSQL_PASS
});

module.exports = connection;
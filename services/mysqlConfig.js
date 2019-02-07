const mysql = require('mysql');

const connection = mysql.createConnection({
        host: 'db4free.net',
        user: 'onlinestoreumair',
        database: 'onlinestore',
        password: 'onlinestoreumair'
});

module.exports = connection;
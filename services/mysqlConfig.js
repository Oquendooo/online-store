const mysql = require('mysql');

const connection = mysql.createConnection({
        host: '208.82.114.167',
        user: 'aaronoqu_aaron',
        database: 'aaronoqu_onlinestore',
        password: 'aaronoqu_aaron'
});


// const connection = mysql.createConnection({
//         host: 'db4free.net',
//         user: 'onlinestoreumair',
//         database: 'onlinestore',
//         password: 'onlinestoreumair'
// });

module.exports = connection;
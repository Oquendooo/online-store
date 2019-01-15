var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'onlinestoreumair',
  database: 'onlinestore',
  password: 'onlinestoreumair'
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();

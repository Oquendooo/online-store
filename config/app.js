var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'online_store',
  password: 'Aaronisaboss94!'
});

var q = 'SELECT * FROM users';
connection.query(q, function (error, results, fields){
  if (error) throw error;
    console.log(results[0].email);
});

connection.end();

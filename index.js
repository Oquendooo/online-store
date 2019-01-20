const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mysqlconfig = require("./config/app.js");
const passportconfig = require('./services/passport');
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'onlinestoreumair',
  database: 'onlinestore',
  password: 'onlinestoreumair'
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});



//Importing the Modals here
const ProductsModel = require('./backend/models/products')(connection);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'client', 'build')));

// Routers for each API
const ProductsRouter = require('./backend/routes/products')(ProductsModel);

// Listeners for each route
app.use('/products', ProductsRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started on port 5000');
});

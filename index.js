const express = require('express');
const mongoose = require('mongoose');
const mysql = require('mysql');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mysqlconfig = require("./config/app.js");

require('./services/passport');



const app = express();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started on port 5000');
});

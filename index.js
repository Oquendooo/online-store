const express = require('express');
const http = require('http');
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const app = express();
const mysqlConnection = require('./services/mysqlConfig');
const cors = require('cors');


//Importing the Models here
const ProductsModel = require('./backend/models/products')(mysqlConnection);
const AuthModel = require('./backend/models/auth')(mysqlConnection);


// Routers for each API
const ProductsRouter = require('./backend/routes/products')(ProductsModel);
const AuthRouter = require('./backend/routes/auth')(AuthModel);
const BillingRouter = require('./backend/routes/billingRoutes')(null);


//App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*' }));
app.use(bodyParser.urlencoded({extended: false}));


// Listeners for each route
app.use('/', ProductsRouter);
app.use('/', AuthRouter);
app.use('/', BillingRouter);


//Serve any static files built by React
if(process.env.PORT){
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  });
}


const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log('Server started on port 5000');

const express = require('express');

module.exports = (model) => {
    const app = express.Router();

    app.post('/insert-product', (req, res) => {

    });


    app.post('/delete-product', (req, res) => {

    });

    app.get('/get-products', (req, res) => {




      model.selectProducts()
          .then(data => {

            res.json(data);
            console.log("Successfully received products from our database");
          })
          .catch(err => {
              console.log(err);
          });

    });

    app.get('/get-product', (req, res) => {


    });

    return app;
};

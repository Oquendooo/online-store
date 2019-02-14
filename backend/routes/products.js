const express = require('express');

module.exports = (model) => {
    const app = express.Router();

    app.post('/insert-product', (req, res) => {

    });


    app.post('/delete-product', (req, res) => {

    });


    // Get sepefiic product route
    app.get('/product/:product_name', (req, res) => {

        let product_name = req.params.product_name;
        product_name = product_name.replace(/-/g, ' ');
        console.log("product name",product_name);
        model.selectProduct(product_name)
            .then(data => {
                console.log("product",data);
                res.json(data);
            });
    });


    app.get('/category/:gender/:apparel_type', (req, res) => {
        console.log(req.params);
        const gender = req.params.gender;
        const apparel_type = req.params.apparel_type;

        model.selectAllOfGenderAndApparelType(gender,apparel_type)
            .then(data => {
                res.json(data);
            });
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

    return app;
};

const express = require('express');

module.exports = (model) => {
    const app = express.Router();

    app.post('/insert-product', (req, res) => {

    });


    app.post('/delete-product', (req, res) => {

    });

    //Below we are selecting our products
    app.get('/category/:gender/:apparel_type', (req, res) => {

        const {gender, apparel_type } =req.params;

        model.selectProductsWithThisGenderAndApparelType(gender, apparel_type)
            .then(data => {

                res.json(data);
                console.log("Successfully received products from our database");
            })
            .catch(err => {
                console.log(err);
            });

    });

    app.get('/category/:gender/:apparel_type/:top_bottom', (req, res) => {

        const {gender, apparel_type, top_bottom } = req.params;

        model.selectProductsWithThisGenderAndApparelTypeAndTopOrBottom (gender, apparel_type, top_bottom)
            .then(data => {

                res.json(data);
                console.log("Successfully received products from our database");
            })
            .catch(err => {
                console.log(err);
            });

    });

    app.get('/category/:gender/:apparelType1/:top-bottom/:apparelType2', (req, res) => {

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

    app.get('/product/:id', (req, res) => {

        console.log("req.body",req.body);

        model.selectProduct()
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

const express = require('express');

module.exports = (model) => {
    const app = express.Router();

    //Below we are selecting our products
    app.post('/search', (req, res) => {
      const query = req.body.query;

      model.searchForProductsRelatedTo(query)
        .then(data => {
          res.json(data);
          console.log("Successfully received products from our database");
        })
        .catch(err => {
          console.log(err);
      });
    });


    //Below we inserting a product into the database
    app.post('/insert-product', (req, res) => {

    });

    //Below we are deleting a product from the database
    app.post('/delete-product', (req, res) => {

    });

    //Below we are selecting our products
    app.get('/category/:gender/:apparel_type', (req, res) => {
      const {gender, apparel_type } = req.params;

      model.selectProductsWithThisGenderAndApparelType(gender, apparel_type)
        .then(data => {
          res.json(data);
          console.log("Successfully received products from our database");
        })
        .catch(err => {
          console.log(err);
      });
    });

    //Below we are selecting our products
    app.get('/category/:gender/:apparel_type/:apparel_type2', (req, res) => {
      const {gender, apparel_type, apparel_type2 } = req.params;

      model.selectProductsWithThisGenderAndApparelTypeAndApparelType2(gender, apparel_type, apparel_type2)
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

    app.get('/category/:gender/:apparel_type/:top_bottom/:apparel_type2', (req, res) => {
      const {gender, apparel_type,top_bottom, apparel_type2 } = req.params;

      model.selectProductsWithThisGenderAndApparelTypeTopBottomApparelType2(gender, apparel_type, top_bottom, apparel_type2)
        .then(data => {
          res.json(data);
          console.log("Successfully received products from our database");
        })
        .catch(err => {
          console.log(err);
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

    app.get('/product/:id', (req, res) => {
      const {id} = req.params;

      model.selectProduct(id)
        .then(data => {
          res.json(data[0]);
          console.log("Successfully received the product from our database");
        })
        .catch(err => {
          console.log(err);
        });

    });

    return app;
};

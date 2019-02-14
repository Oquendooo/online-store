const express = require('express');

module.exports = (model) => {
    const app = express.Router();

    app.post('/insert-product', (req, res) => {

    });


    app.post('/delete-product', (req, res) => {

    });


    // Get specific product route
    app.get('/:product_name', (req, res) => {
        let product_name = req.params.product_name;
        product_name = product_name.replace(/-/g, ' ');
        console.log("product name",product_name);

        model.selectProduct(product_name)
            .then(data => {
                console.log("product",data);
                res.json(data);
            });
    });



    return app;
};

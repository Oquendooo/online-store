const util = require('util');

module.exports = (connection) => {

    const executeQuery = util.promisify(connection.query).bind(connection);

    return {
        insertProduct: () => {

            const query = ``;

            const params = [];

            return executeQuery(query, params)
        },

        deleteProduct: (event_id) => {
            const query =``;

            const params = [event_id];

            return executeQuery(query, params)
        },

        selectProduct: (product_name) => {
            console.log(product_name);
            const query = `
            SELECT DISTINCT *
            FROM products
            WHERE product_name = ?
            LIMIT 1
          `;

            const params = [product_name];

            return executeQuery(query, params)
        },

    }
};

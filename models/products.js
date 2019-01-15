
const util = require('util');

module.exports = (pool) => {

    const executeQuery = util.promisify(pool.query).bind(pool);

    return {

        getProducts: (category) => {

            const query = `
              SELECT * 
              FROM products
            `;

            const params = [category];

            return executeQuery(query, params)
        }

    }

};
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

      selectProduct: (product_id) => {
          const query = `
            SELECT *
            FROM products
            WHERE product_id = ?
          `;

          const params = [product_id];

          return executeQuery(query, params)
      },

      selectProducts: () => {

        const query = `
            SELECT *
            FROM products
            ;
          `;

          const params = [];

          return executeQuery(query, params)
      },
        selectProductsWithThisGenderAndApparelType: (gender, apparel_type) => {

            const query = `
            SELECT *
            FROM products
            WHERE gender = ? AND apparel_type = ?
          `;

            const params = [gender, apparel_type];

            return executeQuery(query, params)
        },
        selectProductsWithThisGenderAndApparelTypeAndTopOrBottom: (gender, apparel_type, top_bottom) => {

            const query = `
            SELECT *
            FROM products
            WHERE gender = ? AND apparel_type = ? AND top_bottom = ?
          `;

            const params = [gender, apparel_type, top_bottom];

            return executeQuery(query, params)
        },
        selectProductsWithThisGenderAndApparelTypeTopBottomApparelType2: (gender, apparel_type, top_bottom, clothing_type) => {

            const query = `
            SELECT *
            FROM products
            WHERE gender = ? AND apparel_type = ? AND top_bottom = ? AND clothing_type = ?
          `;

            const params = [gender, apparel_type, top_bottom, clothing_type];

            return executeQuery(query, params)
        },

    }
};

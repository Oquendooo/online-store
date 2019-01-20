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

      selectProduct: (event_id) => {
          const query = ``;

          const params = [event_id];

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

    }
};

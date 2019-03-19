const util = require('util');
const bcrypt = require('bcrypt-nodejs');
const saltRounds = 10;

module.exports = (connection) => {

  const executeQuery = util.promisify(connection.query).bind(connection);

  return {
    findUser: async (email) => {
      const query = `
        SELECT *
        FROM users
        WHERE email = ?
      `;

      const params = [email];

      return await executeQuery(query, params)
    },
    findUserById: (email) => {

      const query = `
        SELECT *
        FROM users
        WHERE user_id = ?
      `;

      const params = [email];

      return executeQuery(query, params)
    },

    insertUser: async (email, password) => {

      async function hashPassword(email, password) {

        const userPassword = password;
        const saltRounds = bcrypt.genSaltSync(10);

        const hashedPassword = await new Promise((resolve, reject) => {
          bcrypt.hash(password, saltRounds, null, (err, hash) => {
            if (err) reject(err);
            resolve(hash)
          });
        });

        return hashedPassword;
      }

      const myHash = await hashPassword(email, password);

      const query = `
        INSERT INTO users (email, password)
        VALUES (?,?)
      `;

      const params = [email, myHash];
      executeQuery(query, params)

      const query2 = `
        SELECT *
        FROM users
        WHERE email = ?
      `;

      const params2 = [email];

      return executeQuery(query2, params2)

    },
    comparePassword: (cadidatePassword, hashedPassword, callback) => {
      bcrypt.compare(cadidatePassword, hashedPassword, (err, isMatch) => {
        if (err) {
          return callback(err);
        }
        callback(null, isMatch);
      });

    },

  }
};

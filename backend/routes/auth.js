const passport = require('passport');
const passportService = require('../../services/passport');
const jwt = require('jwt-simple');
const express = require('express');
const config = require('../../config');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});


const tokenForUser = (user) => {
  const timeStamp = new Date().getTime();
  return jwt.encode({sub: user.user_id, iat: timeStamp}, config.secret);
};

module.exports = (model) => {
  const app = express.Router();

  // app.get('/', requireAuth, (req, res) => {
  //     res.send({hi: 'there'});
  // });

  app.post('/signin', requireSignin, (req, res, next) => {
    res.send({token: tokenForUser(req.user)});
  });

  app.post('/signup', (req, res, next) => {

    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(422).send({error: 'You must provide email and password'})
    }

    // See if a user with given email exists
    model.findUser(email)
      .then(data => {

        const foundEmail = JSON.parse(JSON.stringify(data))

        console.log("this is the found email", foundEmail[0])

        // If a user with email does Not exist create and save user record

        if (foundEmail.length === 0 || typeof foundEmail.length === 'undefined') {

          model.insertUser(email, password).then(data => {
            const foundEmail = JSON.parse(JSON.stringify(data))
            res.json({token: tokenForUser(foundEmail[0])})
          })
        }


        if (foundEmail.length === 1) {
          // If a user with the given email exist , return an error
          return res.status(422).send({error: 'Email is in use'});
        }
      });

  });


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return app;
};

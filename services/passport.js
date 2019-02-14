const passport = require('passport');
const mysqlConnection = require('./mysqlConfig');
const AuthModel = require('../backend/models/auth')(mysqlConnection);
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create Local Strategy
const localOptions = {usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    //verify this email and password, call done with the user
    //if it is the correct email and password
    //otherwise, call done with false
    const getUser = async () => {

        let user = await AuthModel.findUser(email);
        user = JSON.parse(JSON.stringify(user))[0];

        if(!user) { return done(null,false); }

        //compare passwords - is 'password equal to user.password'
        AuthModel.comparePassword(password,user.password, (err, isMatch) => {

            if (err) { return done({err:'error'}); }

            if(!isMatch) { return done(null,false); }

            return done(null, user);

        })
    };
    return getUser();
});

//Setup options for JWT Strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
   // See if the user ID in the payload exists in our database
   // If it does, call 'done with that other
   // otherwise, call done without a user object
    AuthModel.findUserById(payload.sub)
        .then(data => {
            const user = JSON.parse(JSON.stringify(data))[0];
            console.log("testing", data);
            if(!data) {return done({err:'error'}, false)}

            if(data){
                done(null, user);
            }else{
                done(null, false);
            }


        })

});

// Fix the authencation error
// Tell passport to use this strategy
// passport.use(jwtLogin);
// passport.use(localLogin);
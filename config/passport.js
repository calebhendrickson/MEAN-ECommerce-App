const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");
const config = require("../config/database");

module.exports = function(passport) {
  // create our options
  let opts = {};
  // there are different ways that we can pass the token back and forth,
  // we are using the authorization header here
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

  opts.secretOrKey = config.secret;
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      console.log(jwt_payload);
      User.getUserById(jwt_payload._id, (err, user) => {
        if (err) {
          return done(err, false);
        }

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    })
  );
};

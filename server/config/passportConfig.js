const JwtPassport = require("passport-jwt");
// Model
const UserModel = require("../models/user");

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "Locatesy",
};

module.exports = (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExists = await UserModel.findById(jwt__payload.user);
        if (!doesUserExists) {
          return done(null, false);
        }
        return done(null, doesUserExists);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};

import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/User.js";

const configurePassport = () => {
  if (!process.env.JWT_SECRET) {
    console.error("El archivo .env no contiene la configuración de la clave secreta para JWT");
    return;
  }

   const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  
    secretOrKey: process.env.JWT_SECRET, 
  };

  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload.id);
        if (user) {
          return done(null, user);  
        } else {
          return done(null, false);  
        }
      } catch (error) {
        return done(error, false);
      }
    })
  );
};

export default configurePassport;

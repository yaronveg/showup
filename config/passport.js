import mongoose from "mongoose";
import LocalStrategy from "passport-local";
// import JwtStrategy from "passport-jwt";
import bcrypt from "bcryptjs";
import { User } from "../routes/models/users";

export default function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // match email
      User.findOne({ email: email })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "Email not registered" });
          }

          // match password
          bcrypt.compare(password, user.password),
            (error, isMatch) => {
              if (error) throw error;
              if (isMatch) {
                return done(null, user);
              } else {
                return done(null, false, { message: "Password incorrect" });
              }
            };
        })
        .catch((error) => console.log(error));
    })
  );
}

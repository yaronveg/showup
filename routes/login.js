import bcrypt from "bcrypt";
import express from "express";
import { User } from "./models/users.js";

const router = express.Router();

//// USER LOGIN ////

//// ADD A USER - user signup ////
router.post("/api/users", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const alreadyExists = await User.findOne({ email: email });
  if (alreadyExists !== null) {
    res.send({
      status: 409,
      message: "User already in the system",
      payload: alreadyExists,
    });
  } else {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    // Hash Password => save user
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, async (error, hash) => {
        if (error) throw error;
        console.log("hash is: ", hash);
        newUser.password = hash;
        try {
          const newUserDocument = await new User(newUser).save();
          await res.send({
            status: 200,
            message: "Saved to DB",
            payload: newUserDocument,
          });
        } catch (error) {
          console.log("error: ", error);
        }
      });
    });
  }
});

export default router;

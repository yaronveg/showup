import express from "express";
// import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { User } from "../models/users.js";
import jwt from "jsonwebtoken";

const router = express.Router();

//// USER LOGIN ////
router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const users = await User.find({ email });

  if (users.length < 1) {
    return res.status(401).json({
      status: 401,
      message: "Auth failed",
    });
  }
  const [user] = users;

  bcrypt.compare(password, user.password, (error, result) => {
    if (error) {
      return res.status(401).json({
        status: 401,
        message: "Auth failed",
      });
    }

    if (result) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        process.env.JWT_KEY,
        { expiresIn: "1H" }
      );

      return res.status(200).json({
        status: 200,
        message: "Auth successful",
        token,
      });
    }
    return res.status(401).json({
      status: 401,
      message: "Auth failed",
    });
  });
});

//// ADD A USER - user signup ////
router.post("/api/users", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const alreadyExists = await User.findOne({ email });
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

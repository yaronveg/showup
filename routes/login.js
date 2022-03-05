import express from "express";
import { User } from "./models/users.js";

const router = express.Router();

//// USER LOGIN ////

//// ADD A USER - user signup ////
router.post("/api/users", async (req, res) => {
  const { firstName, lastName, email } = req.body;

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
    };
    const newUserDocument = await new User(newUser).save();
    res.send({ status: 200, message: "Saved to DB", payload: newUserDocument });
  }
});

export default router;

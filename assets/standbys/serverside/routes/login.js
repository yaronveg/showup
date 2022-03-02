import express from "express";
import { User } from "./models/users";

const router = express.Router();

router.get("/api/login", (req, res) => {
  console.log("user login");
});

router.get("/api/signup", (req, res) => {
  console.log("user signup");
});

router.post("/api/users", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = {
    firstName,
    lastName,
    email,
  };
  const newUserDocument = await new User(newUser).save();
  console.log("saved to DB: ", newUserDocument);
  res.send(newUser);
});

export default router;

import express from "express";
// import dotenv from "dotenv";
import { userLogin, createUser } from "../controllers/login";

const router = express.Router();

//// USER LOGIN ////
router.post("/api/login", userLogin);

//// ADD A USER - user signup ////
router.post("/api/users", createUser);

export default router;

import express from "express";
// import fetch from "node-fetch";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import usersRoutes from "./routes/users.js";

dotenv.config();
const app = express();

//Routes
app.use(usersRoutes);

// makes sure all rerquest going through body with JSON will parse:
app.use(express.json());
app.use(cors());

// app.use(express.static(`client/build`));

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
// mongoose.connect("mongodb://localhost:27017/showUpLocal", async (err) => {
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  // `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  async (err) => {
    err ? console.log(err) : app.listen(process.env.PORT || 8000);
  }
);

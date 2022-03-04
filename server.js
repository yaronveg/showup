import express from "express";
// import fetch from "node-fetch";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import usersRoutes from "./routes/users.js";
import loginRoutes from "./routes/login.js";

dotenv.config();
const app = express();

// makes sure all rerquest going through body with JSON will parse:
app.use(express.json());
app.use(cors());

app.use(express.static(`client/build`));

///////// ROUTES /////////
// a "catchall" handler for any request that doesn't match the C.R.U.D. - will send back React's Index.html file.
app.get(!`/api${"*"}` && "*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});
app.use(usersRoutes);
app.use(loginRoutes);

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
// mongoose.connect("mongodb://localhost:27017/showUpLocal", async (err) => {
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  async (err) => {
    err ? console.log(err) : app.listen(process.env.PORT || 8000);
  }
);

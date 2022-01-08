import express from "express";
// import fetch from "node-fetch";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// makes sure all rerquest going through body with JSON will parse:
app.use(express.json());

// app.use(express.static(`client/build`));

//USER SCHEMA START
// refer to a scheme and define.
const userSchema = new mongoose.Schema({
  userId: String,
  email: String,
  firstName: String,
  lastName: String,
  profilePicture: String,
  coverPicture: String,
  bio: String,
  skills: [],
  genres: [],
  galleryPictures: [],
  timestamps: [
    {
      year: Number,
      stamps: [
        {
          id: String,
          date: String,
          type: String,
          detail: String,
          text: String,
          subText: String,
          subType: String,
        },
      ],
    },
  ],
  playlist: [{ src: String, title: String, duration: Number }],
  connections: [
    { id: String, status: String, timeUpdated: Date, timeCrated: Date },
  ],
});

// methods
userSchema.methods.fullName = function fullName() {
  return this.firstName + " " + this.lastName;
};
userSchema.methods.playlistTitles = function playlistTitles() {
  return this.playlist.map((song) => song.title);
};
userSchema.methods.connectionsList = function connectionsList() {
  return this.connections
    .filter((connection) => connection.status === "connected")
    .map((connection) => connection.id);
};
userSchema.methods.connectionCount = function connectionCount() {
  return this.connections().length;
};
userSchema.methods.pending = function pending() {
  return this.connections
    .filter((connection) => connection.status === "pending")
    .map((connection) => connection.id);
};
userSchema.methods.pendingCount = function pendingCount() {
  return this.pending().length;
};
userSchema.methods.requests = function requests() {
  return this.connections
    .filter((connection) => connection.status === "requests")
    .map((connection) => connection.id);
};
userSchema.methods.requestsCount = function requestsCount() {
  return this.requests().length;
};

// compile schema into a Model.
const User = mongoose.model("User", userSchema);

//USER SCHEMA END

// a "catchall" handler for any request that doesn't match the C.R.U.D. - will send back React's Index.html file.
app.get(!`/api${"*"}` && "*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

////////////// C.R.U.D - CREATE, READ, UPDATE, DELETE //////////////

// READ //
app.get("/api/users", async (req, res) => {
  let users = await User.find();

  // const term = req.body.term;
  const { term } = req.query.toLowerCase();
  if (term) {
    users = users.filter(
      (user) =>
        user.fullName().toLowerCase().includes(term) ||
        user.bio.toLowerCase().includes(term) ||
        user.skills.find((skill) => skill.toLowerCase().includes(term)) ||
        user.genres.find((genre) => genre.toLowerCase().includes(term)) ||
        user.timestamps.find((year) =>
          year.stamps.find(
            (stamp) =>
              stamp.date.includes(term) ||
              stamp.type.includes(term) ||
              stamp.detail.includes(term) ||
              stamp.text.includes(term) ||
              stamp.subText.includes(term) ||
              stamp.subType.includes(term)
          )
        ) ||
        user.playlist.find((track) => track.title.includes(term))
    );
  }

  res.send(users);
});

// READ user //
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await User.findById(id));
});

// CREATE User //
app.post("/api/users", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = {
    firstName,
    lastName,
    email,
  };
  const newUserDocument = new User(newUser).save();
  console.log("saved to DB: ", newUserDocument);
  res.send(newUser);
});

// UPDATE //
app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const updated = await User.findByIdAndUpdate(id, body);
  res.send(updated);
});

// DELETE //
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await User.findByIdAndDelete(id);
  res.send(deleted);
});

// const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
// mongoose.connect(
//   `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
//   async (err) => {
mongoose.connect("mongodb://localhost:27017/showUpLocal", async (err) => {
  err ? console.log(err) : app.listen(process.env.PORT || 8000);
});

import express from "express";
import { User } from "./models/users.js";

const router = express.Router();

router.get("/", (req, res) => res.send("welcome"));

// a "catchall" handler for any request that doesn't match the C.R.U.D. - will send back React's Index.html file.
router.get(!`/api${"*"}` && "*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

////////////// C.R.U.D - CREATE, READ, UPDATE, DELETE //////////////

// READ //
router.get("/api/users", async (req, res) => {
  let users = await User.find();

  // const term = req.body.term;
  const { term } = req.query;
  if (term) {
    const termLower = term.toLowerCase();
    users = users.filter(
      (user) =>
        user.fullName().toLowerCase().includes(termLower) ||
        (user.bio && user.bio.toLowerCase().includes(termLower)) ||
        user.skills.some((skill) => skill.toLowerCase().includes(termLower)) ||
        user.genres.some((genre) => genre.toLowerCase().includes(termLower)) ||
        user.timestamps.some((year) =>
          year.stamps.some(
            (stamp) =>
              stamp.date.includes(termLower) ||
              stamp.type.includes(termLower) ||
              stamp.detail.includes(termLower) ||
              stamp.text.includes(termLower) ||
              stamp.subText.includes(termLower) ||
              stamp.subType.includes(termLower)
          )
        ) ||
        user.playlist.find((track) => track.title.includes(termLower))
    );
  }

  res.send(users);
});

// READ user //
router.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  res.send(await User.findById(id));
});

// CREATE User //
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

// UPDATE //
router.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = await User.findById(id);
  console.log(user);
  const updated = await User.findByIdAndUpdate(id, body);
  res.send(updated);
});

// DELETE //
router.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const deleted = await User.findByIdAndDelete(id);
  res.send(deleted);
});

// module.exports = router;
export default router;

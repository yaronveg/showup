import { User } from "../models/users";

export const getAllUsers = async (req, res) => {
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
};
export const getUser = async (req, res) => {
  const { id } = req.params;
  res.send(await User.findById(id));
};
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const user = await User.findById(id);
  console.log(user);
  const updated = await User.findByIdAndUpdate(id, body);
  res.send(updated);
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deleted = await User.findByIdAndDelete(id);
  res.send(deleted);
};
export const authUser = async (req, res) => {
  res.status(200).json({ message: "ok!" });
};

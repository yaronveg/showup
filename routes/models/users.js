//USER SCHEMA START

import mongoose from "mongoose";

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

//////// METHODS ////////
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
export const User = mongoose.model("User", userSchema);

//USER SCHEMA END

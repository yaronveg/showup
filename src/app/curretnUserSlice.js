import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 135792468,
  email: "yaronveg1@gmail.com",
  firstName: "yaron",
  lastName: "veg",
  profilePicture: "",
  //   coverPicture: "",
  //   bio: "",
  //   skills: [],
  genres: [],
  //   galleryPictures: [],
  //   timestamps: [],
  //   playlist: [],
  connections: [],
};

// true initial state:
/*
const initialState = {
  userId: 0,
  firstName: "",
  email: "",
  lastName: "",
  profilePicture: "",
//   coverPicture: "",
//   bio: "",
//   skills: [],
  genres: [],
//   galleryPictures: [],
//   timestamps: [],
//   playlist: [],
  connections: [],
};
*/

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    logOut: (currentUserState) => {
      currentUserState = initialState;
    },
    // old function, using action payload demo:
    changeImg: (currentUserState, action) => {
      currentUserState.index = action.payload;
    },
  },
});

export const { logOut } = currentUserSlice.actions;

export default currentUserSlice.reducer;

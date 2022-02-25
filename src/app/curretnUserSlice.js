import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 135792468,
  email: "yaronveg1@gmail.com",
  firstName: "yaron",
  lastName: "veg",
  profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
};

// true initial state:
/*
const initialState = {
  userId: 0,
  firstName: "",
  email: "",
  lastName: "",
  profilePicture: "",
};
*/

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    logOut: (currentUserState) => {
      currentUserState = initialState;
    },
    logIn: (currentUserState, action) => {
      currentUserState.userId = action.payload;
      // TODO: fill in the rest of currentUserState using a query to the db.
    },
  },
});

export const { logOut } = currentUserSlice.actions;

export default currentUserSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  isShow: false,
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    showByIndex: (galleryState, action) => {
      galleryState.index = action.payload;
      galleryState.isShow = true;
    },
    hide: (galleryState) => {
      galleryState.isShow = false;
    },
    changeImg: (galleryState, action) => {
      galleryState.index = action.payload;
    },
  },
});

export const { showByIndex, hide, changeImg } = gallerySlice.actions;

export default gallerySlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";
import audioPlayerReducer from "./audioPlayerSlice";
import filtersReducer from "./filtersSlice";
import currentUserReducer from "./currentUserSlice";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    audioPlayer: audioPlayerReducer,
    filters: filtersReducer,
    currentUser: currentUserReducer,
  },
});

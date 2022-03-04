import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";
import audioPlayerReducer from "./audioPlayerSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer,
    audioPlayer: audioPlayerReducer,
    filters: filtersReducer,
  },
});

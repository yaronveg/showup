import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./gallerySlice";
import audioPlayerReducer from "./audioPlayerSlice";

export const store = configureStore({
  reducer: { gallery: galleryReducer, audioPlayer: audioPlayerReducer },
});

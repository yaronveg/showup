import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: 0,
  isPlaying: false,
  listOpen: false,
  progress: 0,
  duration: 0,
};

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    changeProgress: (audioPlayerState, action) => {
      const { currentTime, duration } = action.payload;
      const newProgress = Math.floor((currentTime / duration) * 100);
      audioPlayerState.progress = newProgress;
    },
    updateProgress: (audioPlayerState, action) => {
      const newProgress = action.payload;
      audioPlayerState.progress = newProgress;
    },
    loadPlaylist: (audioPlayerState, action) => {
      console.log("loading playlist...");
    },
    setDuration: (audioPlayerState, action) => {
      audioPlayerState.duration = action.payload;
    },
    changeSong: (audioPlayerState, action) => {
      audioPlayerState.isPlaying = true;
      audioPlayerState.currentSong = action.payload;
    },
    togglePlay: (audioPlayerState) => {
      audioPlayerState.isPlaying = !audioPlayerState.isPlaying;
    },
    next: (audioPlayerState, action) => {
      audioPlayerState.isPlaying = true;
      audioPlayerState.currentSong++;
      if (audioPlayerState.currentSong >= action.payload) {
        audioPlayerState.currentSong = 0;
      }
    },
    togglePlaylist: (audioPlayerState) => {
      audioPlayerState.listOpen = !audioPlayerState.listOpen;
    },
  },
});

export const {
  setDuration,
  loadPlaylist,
  togglePlay,
  changeSong,
  next,
  togglePlaylist,
  changeProgress,
  updateProgress,
} = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;

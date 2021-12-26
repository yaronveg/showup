import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [
    {
      src: "/aud1.mp3",
      title: "song 1",
      duration: 0,
    },
    {
      src: "/aud2.mp3",
      title: "song 2",
      duration: 0,
    },
    {
      src: "/aud3.mp3",
      title: "song 3",
      duration: 0,
    },
  ],
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
    setDuration: (audioPlayerState, action) => {
      console.log(action.payload);
      audioPlayerState.duration = action.payload;
    },
    changeProgress: (audioPlayerState, action) => {
      const { currentTime, duration } = action.payload;
      const newProgress = (currentTime / duration) * 100;
      audioPlayerState.progress = newProgress;
    },
    loadPlaylist: (audioPlayerState, action) => {
      console.log("loading playlist...");
    },
    changeSong: (audioPlayerState, action) => {
      audioPlayerState.isPlaying = true;
      audioPlayerState.currentSong = action.payload;
    },
    togglePlay: (audioPlayerState) => {
      audioPlayerState.isPlaying = !audioPlayerState.isPlaying;
    },
    next: (audioPlayerState) => {
      audioPlayerState.isPlaying = true;
      audioPlayerState.currentSong++;
      if (audioPlayerState.currentSong >= audioPlayerState.playlist.length) {
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
} = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;

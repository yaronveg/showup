import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [
    {
      src: "../../assets/standbys/profile-audios/aud1.mp3",
      title: "song 1",
      duration: 0,
    },
    {
      src: "../../assets/standbys/profile-audios/aud2.mp3",
      title: "song 2",
      duration: 0,
    },
    {
      src: "../../assets/standbys/profile-audios/aud3.mp3",
      title: "song 3",
      duration: 0,
    },
  ],
  currentSong: 0,
  isPlaying: false,
  listOpen: false,
  progress: 0,
};

export const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState,
  reducers: {
    loadPlaylist: (audioPlayerState, action) => {
      console.log("loading playlist...");
    },
    togglePlay: (audioPlayerState) => {
      console.log("togglePlay");
      audioPlayerState.isPlaying = !audioPlayerState.isPlaying;
    },
    changeSong: (audioPlayerState, action) => {
      audioPlayerState.currentSong = action.payload;
    },
    next: (audioPlayerState) => {
      audioPlayerState.currentSong++;
    },
    togglePlaylist: (audioPlayerState) => {
      audioPlayerState.listOpen = !audioPlayerState.listOpen;
    },
    changeProgress: (audioPlayerState, action) => {
      audioPlayerState.progress = action.payload;
    },
  },
});

export const {
  loadPlaylist,
  togglePlay,
  changeSong,
  next,
  togglePlaylist,
  changeProgress,
} = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;

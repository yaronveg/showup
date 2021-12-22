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
    changeProgress: (audioPlayerState, action) => {
      audioPlayerState.progress = action.payload;
    },
    loadPlaylist: (audioPlayerState, action) => {
      console.log("loading playlist...");
    },
    changeSong: (audioPlayerState, action) => {
      audioPlayerState.currentSong = action.payload;
    },
    togglePlay: (audioPlayerState) => {
      audioPlayerState.isPlaying = !audioPlayerState.isPlaying;
    },
    next: (audioPlayerState) => {
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
  loadPlaylist,
  togglePlay,
  changeSong,
  next,
  togglePlaylist,
  changeProgress,
} = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;

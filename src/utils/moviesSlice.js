import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addOnAirMovies: (state, action) => {
      state.onAirMovies = action.payload;
    },
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addOnAirMovies,
  addAiringToday
} = moviesSlice.actions;
export default moviesSlice.reducer;

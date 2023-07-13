import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../services/movies";
import { shows } from "../services/shows";
const initialState = {
  movies: movies,
  shows: shows,
  watchList: [
    {
      id: "0",
      name: "new play list",
      collection: [],
    },
  ],
  currentPlayList: "0",
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    likeMovie: (state, { payload }) => {
      const movieIndex = state.movies.findIndex((item) => item.id === payload);
      if (movieIndex === -1) {
        const serieIndex = state.shows.findIndex((item) => item.id === payload);
        if (serieIndex === -1) {
          undefined;
        } else {
          if (state.shows[serieIndex].liked) {
            state.shows[serieIndex].likes = state.shows[serieIndex].likes - 1;
            state.shows[serieIndex].liked = false;
          } else {
            state.shows[serieIndex].likes = state.shows[serieIndex].likes + 1;
            state.shows[serieIndex].liked = true;
          }
        }
      } else {
        if (state.movies[movieIndex].liked) {
          state.movies[movieIndex].likes = state.movies[movieIndex].likes - 1;
          state.movies[movieIndex].liked = false;
        } else {
          state.movies[movieIndex].likes = state.movies[movieIndex].likes + 1;
          state.movies[movieIndex].liked = true;
        }
      }
    },
  },
});

export const { likeMovie } = movieSlice.actions;

export default movieSlice.reducer;

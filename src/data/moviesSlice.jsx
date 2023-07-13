import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../services/movies";
import { shows } from "../services/shows";
const initialState = {
  movies: movies,
  shows: shows,
  watchList: [
    {
      id: 0,
      name: "My Playlist",
      collection: [],
    },
  ],
  currentPlayList: 0,
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
    createWatchlist: (state, { payload }) => {
      const isExist = state.watchList.find((item) => item.name === payload);
      if (isExist) {
        //
      } else {
        state.currentPlayList = state.watchList.length;
        state.watchList.push({
          id: state.watchList.length,
          name: payload,
          collection: [],
        });
      }
    },
    setCurrentList: (state, { payload }) => {
      const currenIndex = state.watchList.findIndex(
        (item) => item.name === payload
      );
      state.currentPlayList = currenIndex;
    },
  },
});

export const { likeMovie, setCurrentList, createWatchlist } =
  movieSlice.actions;

export default movieSlice.reducer;

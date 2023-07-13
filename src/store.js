import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./data/blogSlice";
import moviesSlice from "./data/moviesSlice";
export const store = configureStore({
  reducer: {
    blogData: blogSlice,
    movieData: moviesSlice,
  },
});

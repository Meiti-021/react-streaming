import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./data/blogSlice";
export const store = configureStore({
  reducer: {
    blogData: blogSlice,
  },
});

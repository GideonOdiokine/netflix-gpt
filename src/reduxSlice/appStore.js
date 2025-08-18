import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reduxSlice/userSlice";
import moviesReducer from "../reduxSlice/moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reduxSlice/userSlice";
import configReducer from "../reduxSlice/configSlice";
import moviesReducer from "../reduxSlice/moviesSlice";
import gptReducer from "../reduxSlice/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;

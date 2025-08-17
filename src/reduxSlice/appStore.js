import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reduxSlice/userSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;

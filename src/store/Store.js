import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from "./Slices/BackgroundSlice";

export const store = configureStore({
  reducer: {
    background: backgroundReducer,
  },
});

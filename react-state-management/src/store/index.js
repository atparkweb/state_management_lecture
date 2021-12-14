import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./charactersSlice";
import targetReducer from "./targetSlice";

export default configureStore({
  reducer: {
    characters: charactersReducer,
    target: targetReducer
  }
});
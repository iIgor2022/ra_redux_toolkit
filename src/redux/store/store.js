import { configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "../slices/toolkitSlice";
import imageSlice from "../slices/imageSlice";

export default configureStore({
  reducer: {
    facts: toolkitSlice,
    images: imageSlice,
  },
});
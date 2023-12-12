import { configureStore } from "@reduxjs/toolkit";
import brandRdeucer from "../features/brand/brandSlice";

export const store = configureStore({
  reducer: {
    brand: brandRdeucer,
  },
});

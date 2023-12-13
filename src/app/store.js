import { configureStore } from "@reduxjs/toolkit";
import brandRdeucer from "../features/brand/brandSlice";
import categoriesRdeucer from "../features/categories/categoriesSlice";
import bannerRdeucer from "../features/banner/bannerTop";
import popularRdeucer from "../features/popular/popularBottom";

export const store = configureStore({
  reducer: {
    brand: brandRdeucer,
    categories: categoriesRdeucer,
    banner: bannerRdeucer,
    popular: popularRdeucer,
  },
});

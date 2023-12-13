import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3005/Brands ");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  categories: [],
  error: null,
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })

      .addCase(getCategories.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopular = createAsyncThunk(
  "popular/getPopular",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3005/Products");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
    popular: [],
    error: null,
    isLoading: false,
};

export const popularBottom = createSlice({
  name: "populars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopular.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.popular = action.payload;
      })

      .addCase(getPopular.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default popularBottom.reducer;

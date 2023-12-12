import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBrand = createAsyncThunk(
  "brand/getBrand",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3005/Brands");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  brand: [],
  error: null,
  isLoading: false,
};

export const brandSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrand.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getBrand.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brand = action.payload;
      })

      .addCase(getBrand.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default brandSlice.reducer;

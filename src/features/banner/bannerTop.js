import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBanner = createAsyncThunk(
  "banner/getBanner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3005/Banner");
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  banner: [],
  error: null,
  isLoading: false,
};

export const bannerTop = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBanner.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getBanner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.banner = action.payload;
      })

      .addCase(getBanner.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default bannerTop.reducer;

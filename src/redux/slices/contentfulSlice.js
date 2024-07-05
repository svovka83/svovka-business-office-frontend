import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contentfulQuery } from "../../pages/Preview/utils/queries";
import { request } from "../../pages/Preview/utils/fetchContentful";

export const fetchGetContentful = createAsyncThunk(
  "contentful/fetchGetContentful",
  async (_, thunkAPI) => {
    try {
      const data = await request(contentfulQuery);
      console.log("data", data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  items: [],
  isLoading: false,
};

const contentfulSlice = createSlice({
  name: "contentful",
  initialState,
  reducers: {},
  selectors: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetContentful.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetContentful.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchGetContentful.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const contentfulReducer = contentfulSlice.reducer; 
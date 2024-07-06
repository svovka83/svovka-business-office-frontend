import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../pages/Preview/utils/fetchContentful";
import { authorCollectionQuery } from "../../pages/Preview/utils/queries";

export const fetchGetContentful = createAsyncThunk(
  "contentful/fetchGetContentful",
  async (_, thunkAPI) => {
    try {
      const data = await request(authorCollectionQuery);
      console.log("data", data);
      const { items } = data.authorCollection;
      return items;
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
  selectors: {
    contentfulItems: (state) => state.items,
    contentfulIsLoading: (state) => state.isLoading,
  },
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

export const { contentfulItems, contentfulIsLoading } = contentfulSlice.selectors;
export const contentfulReducer = contentfulSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../pages/Preview/utils/fetchContentful";
import { authorCollectionQuery } from "../../pages/Preview/utils/queries";

export const fetchGetContentfulText = createAsyncThunk(
  "contentfulText/fetchGetContentfulText",
  async (_, thunkAPI) => {
    try {
      const data = await request(authorCollectionQuery);
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

const contentfulTextSlice = createSlice({
  name: "contentfulText",
  initialState,
  reducers: {},
  selectors: {
    contentfulItemsText: (state) => state.items,
    contentfulIsLoading: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetContentfulText.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetContentfulText.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchGetContentfulText.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { contentfulItemsText, contentfulIsLoading } =
  contentfulTextSlice.selectors;
export const contentfulTextReducer = contentfulTextSlice.reducer;

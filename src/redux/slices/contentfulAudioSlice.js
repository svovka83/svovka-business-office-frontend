import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../pages/Preview/utils/fetchContentful";
import { mediaCollectionQuery } from "../../pages/Preview/utils/queries";

export const fetchGetContentfulAudio = createAsyncThunk(
  "contentfulAudio/fetchGetContentfulAudio",
  async (_, thunkAPI) => {
    try {
      const data = await request(mediaCollectionQuery);
      const { items } = data.mediaCollection;
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

const contentfulAudioSlice = createSlice({
  name: "contentfulAudio",
  initialState,
  reducers: {},
  selectors: {
    contentfulItemsAudio: (state) => state.items,
    contentfulIsLoading: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetContentfulAudio.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetContentfulAudio.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchGetContentfulAudio.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { contentfulItemsAudio, contentfulIsLoading } =
  contentfulAudioSlice.selectors;
export const contentfulAudioReducer = contentfulAudioSlice.reducer;

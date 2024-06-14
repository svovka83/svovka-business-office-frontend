import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchGetAllComments = createAsyncThunk(
  "comments/fetchGetAllComments",
  async () => {
    const { data } = await axios.get("/comments");
    return data;
  }
);

const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  selectors: {
    selectorAllComments: (state) => state.comments,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllComments.pending, (state) => {
      state.comments = [];
    });
    builder.addCase(fetchGetAllComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(fetchGetAllComments.rejected, (state) => {
      state.comments = [];
    });
  },
});

export const { selectorAllComments } = commentsSlice.selectors;

export const commentsReducer = commentsSlice.reducer;

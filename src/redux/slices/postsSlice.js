import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchGetAllPosts = createAsyncThunk(
  "posts/fetchGetAllPosts",
  async () => {
    const { data } = await axios.get("/posts");
    return data;
  }
);

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  selectors: {
    selectorAllPosts: (state) => state.posts,
    selectorUserLikes: (state) => state.post.userLikes,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllPosts.pending, (state) => {
      state.posts = [];
    });
    builder.addCase(fetchGetAllPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(fetchGetAllPosts.rejected, (state) => {
      state.posts = [];
    });
  },
});

export const { selectorAllPosts } = postsSlice.selectors;

export const postsReducer = postsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchGetAllPosts = createAsyncThunk(
  "posts/fetchGetAllPosts",
  async () => {
    const { data } = await axios.get("/posts");
    return data;
  }
);
export const fetchGetOnePosts = createAsyncThunk(
  "posts/fetchGetOnePosts",
  async (id) => {
    const { data } = await axios.get(`/posts/${id}`);
    return data;
  }
);

const initialState = {
  posts: [],
  post: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  selectors: {
    selectorAllPosts: (state) => state.posts,
    selectorOnePost: (state) => state.post,
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

    builder.addCase(fetchGetOnePosts.pending, (state) => {
      state.post = {};
    });
    builder.addCase(fetchGetOnePosts.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(fetchGetOnePosts.rejected, (state) => {
      state.post = {};
    });
  },
});

export const { selectorAllPosts, selectorOnePost } = postsSlice.selectors;

export const postsReducer = postsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchGetAllPosts = createAsyncThunk(
  "posts/fetchGetAllPosts",
  async () => {
    const { data } = await axios.get("/posts");
    return data;
  }
);

export const fetchGetOnePost = createAsyncThunk(
  "posts/fetchGetOnePost",
  async (id) => {
    const { data } = await axios.get(`/posts/${id}`);
    return data;
  }
);

const initialState = {
  posts: [],
  post: {},
  status: "loading",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reducerClearPost: (state) => {
      state.post = {};
    },
  },
  selectors: {
    selectorAllPosts: (state) => state.posts,
    selectorOnePost: (state) => state.post,
    selectorStatusPost: (state) => state.status,
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

    builder.addCase(fetchGetOnePost.pending, (state) => {
      state.post = {};
      state.status = "loading";
    });
    builder.addCase(fetchGetOnePost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchGetOnePost.rejected, (state) => {
      state.post = {};
    });
  },
});

export const { selectorAllPosts, selectorOnePost, selectorStatusPost } =
  postsSlice.selectors;
export const { reducerClearPost } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

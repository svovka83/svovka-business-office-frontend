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

export const fetchUpdatePost = createAsyncThunk(
  "posts/fetchUpdatePost",
  async ({ id, fields }) => {
    const { data } = await axios.put(`/posts/${id}`, fields);
    return data;
  }
);

export const fetchAddLike = createAsyncThunk(
  "posts/fetchAddLike",
  async ({ id, fields }) => {
    const { data } = await axios.put(`/posts/${id}`, fields);
    return data;
  }
);
export const fetchRemoveLike = createAsyncThunk(
  "posts/fetchRemoveLike",
  async ({ id, fields }) => {
    const { data } = await axios.put(`/posts/${id}`, fields);
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

    builder.addCase(fetchUpdatePost.pending, (state) => {
      state.post = {};
      state.status = "loading";
    });
    builder.addCase(fetchUpdatePost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchUpdatePost.rejected, (state) => {
      state.post = {};
    });

    builder.addCase(fetchAddLike.pending, (state) => {
      state.post = {};
      state.status = "loading";
    });
    builder.addCase(fetchAddLike.fulfilled, (state, action) => {
      state.post = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAddLike.rejected, (state) => {
      state.post = {};
    });

    builder.addCase(fetchRemoveLike.pending, (state) => {
      state.post = {};
      state.status = "loading";
    });
    builder.addCase(fetchRemoveLike.fulfilled, (state, action) => {
      state.post = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchRemoveLike.rejected, (state) => {
      state.post = {};
    });
  },
});

export const { selectorAllPosts, selectorOnePost, selectorStatusPost } =
  postsSlice.selectors;
export const { reducerClearPost } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;

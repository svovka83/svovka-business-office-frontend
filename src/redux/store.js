import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/usersSlice";
import { postsReducer } from "./slices/postsSlice";
import { commentsReducer } from "./slices/commentsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});

export default store;

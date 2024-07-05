import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { postsReducer } from "./slices/postsSlice";
import { commentsReducer } from "./slices/commentsSlice";
import { dialogsReducer } from "./slices/dialogsSlice";
import { contentfulReducer } from "./slices/contentfulSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    dialogs: dialogsReducer,
    contentful: contentfulReducer,
  },
});

export default store;

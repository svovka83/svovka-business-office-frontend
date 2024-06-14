import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { postsReducer } from "./slices/postsSlice";
import { commentsReducer } from "./slices/commentsSlice";
import { dialogsReducer } from "./slices/dialogsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    dialogs: dialogsReducer,
  },
});

export default store;

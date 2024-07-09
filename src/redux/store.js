import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { postsReducer } from "./slices/postsSlice";
import { commentsReducer } from "./slices/commentsSlice";
import { dialogsReducer } from "./slices/dialogsSlice";

import { contentfulTextReducer } from "./slices/contentfulTextSlice";
import { contentfulAudioReducer } from "./slices/contentfulAudioSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    dialogs: dialogsReducer,

    contentfulText: contentfulTextReducer,
    contentfulAudio: contentfulAudioReducer,
  },
});

export default store;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/register", params);
    return data;
  }
);

export const fetchLogin = createAsyncThunk(
  "user/fetchLogin",
  async (params) => {
    const { data } = await axios.post("/login", params);
    return data;
  }
);

export const fetchGetMe = createAsyncThunk("user/fetchGetMe", async () => {
  const { data } = await axios.get("/me");
  return data;
});

export const fetchUpdateAvatar = createAsyncThunk(
  "user/fetchUpdateAvatar",
  async (formData) => {
    const { data } = await axios.post("/upload", formData);
    return data;
  }
);

export const fetchUpdateMe = createAsyncThunk(
  "user/fetchUpdateMe",
  async (fields) => {
    const { data } = await axios.put("/me", fields);
    return data;
  }
);

export const fetchGetAllUsers = createAsyncThunk(
  "user/fetchGetAllUsers",
  async () => {
    const { data } = await axios.get("/users");
    return data;
  }
);

export const fetchGetOneUser = createAsyncThunk(
  "user/fetchGetOneUser",
  async (id) => {
    const { data } = await axios.get(`/users/${id}`);
    return data;
  }
);

export const fetchAddFriend = createAsyncThunk(
  "user/fetchAddFriend",
  async (id) => {
    const { data } = await axios.put(`/users/add_friend/${id}`);
    return data;
  }
);

export const fetchRemoveFriend = createAsyncThunk(
  "user/fetchRemoveFriend",
  async (id) => {
    const { data } = await axios.put(`/users/remove_friend/${id}`);
    return data;
  }
);

const initialState = {
  me: null,
  users: [],
  user: {},
  status: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logOut: (state) => {
      state.me = null;
    },
  },
  selectors: {
    selectorFullData: (state) => state.me,
    selectorIsAuth: (state) => Boolean(state.me),
    selectorMyFriends: (state) => state.me.friends,
    selectorAllUsers: (state) => state.users,
    selectorOneUser: (state) => state.user,
    selectorStatus: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.me = null;
      state.status = "loading";
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.me = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.me = null;
    });

    builder.addCase(fetchLogin.pending, (state) => {
      state.me = null;
      state.status = "loading";
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.me = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.me = null;
    });

    builder.addCase(fetchGetMe.pending, (state) => {
      state.me = null;
      state.status = "loading";
    });
    builder.addCase(fetchGetMe.fulfilled, (state, action) => {
      state.me = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchGetMe.rejected, (state) => {
      state.me = null;
      state.status = "error";
    });

    builder.addCase(fetchUpdateAvatar.pending, (state) => {
      state.me = null;
      state.status = "loading";
    });
    builder.addCase(fetchUpdateAvatar.fulfilled, (state, action) => {
      state.me = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchUpdateAvatar.rejected, (state) => {
      state.me = null;
    });

    builder.addCase(fetchUpdateMe.pending, (state) => {
      state.me = null;
      state.status = "loading";
    });
    builder.addCase(fetchUpdateMe.fulfilled, (state, action) => {
      state.me = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchUpdateMe.rejected, (state) => {
      state.me = null;
    });

    builder.addCase(fetchGetAllUsers.pending, (state, action) => {
      state.users = [];
    });
    builder.addCase(fetchGetAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(fetchGetAllUsers.rejected, (state) => {
      state.users = [];
    });

    builder.addCase(fetchGetOneUser.pending, (state) => {
      state.user = {};
    });
    builder.addCase(fetchGetOneUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchGetOneUser.rejected, (state) => {
      state.user = {};
    });

    builder.addCase(fetchAddFriend.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAddFriend.fulfilled, (state, action) => {
      state.me = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAddFriend.rejected, (state) => {
      state.me = null;
    });

    builder.addCase(fetchRemoveFriend.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRemoveFriend.fulfilled, (state, action) => {
      state.me = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchRemoveFriend.rejected, (state) => {
      state.me = null;
    });
  },
});

export const {
  selectorFullData,
  selectorIsAuth,
  selectorMyFriends,
  selectorAllUsers,
  selectorOneUser,
  selectorStatus,
} = usersSlice.selectors;
export const { logOut } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;

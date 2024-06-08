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
    const { data } = await axios.patch(`/users/friends/${id}`);
    return data;
  }
);

const initialState = {
  me: null,
  users: [],
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.me = null;
    },
  },
  selectors: {
    selectorFullData: (state) => state.me,
    selectorAllUsers: (state) => state.users,
    selectorOneUser: (state) => state.user,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.me = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.me = null;
    });

    builder.addCase(fetchLogin.pending, (state) => {
      state.me = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.me = null;
    });

    builder.addCase(fetchGetMe.pending, (state) => {
      state.me = null;
    });
    builder.addCase(fetchGetMe.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(fetchGetMe.rejected, (state) => {
      state.me = null;
    });

    builder.addCase(fetchGetAllUsers.pending, (state) => {
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
      state.me = null;
    });
    builder.addCase(fetchAddFriend.fulfilled, (state, action) => {
      state.me = action.payload;
    });
    builder.addCase(fetchAddFriend.rejected, (state) => {
      state.me = null;
    });
  },
});

export const { selectorFullData, selectorAllUsers, selectorOneUser } =
  userSlice.selectors;
export const { logOut } = userSlice.actions;

export const userReducer = userSlice.reducer;

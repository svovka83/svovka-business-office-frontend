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

const initialState = {
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut: (state) => {
      state.data = null;
    },
  },
  selectors: {
    selectorFullData: (state) => state.data,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRegister.pending, (state) => {
      state.data = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.data = null;
    });

    builder.addCase(fetchLogin.pending, (state) => {
      state.data = null;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state) => {
      state.data = null;
    });
  },
});

export const { selectorFullData } = userSlice.selectors;
export const { logOut } = userSlice.actions;

export const userReducer = userSlice.reducer;

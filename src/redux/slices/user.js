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
    [fetchRegister.pending]: (state) => {
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.data = null;
    },

    [fetchLogin.pending]: (state) => {
      state.data = null;
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [fetchLogin.rejected]: (state) => {
      state.data = null;
    },
  },
});

export const userReducer = userSlice.reducer;

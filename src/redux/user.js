import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRegister = createAsyncThunk(
  "user/fetchRegister",
  async (params) => {
    const { data } = await axios.post(
      "http://localhost:5555/register",
      params
    );
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
  },
});

export const userReducer = userSlice.reducer;

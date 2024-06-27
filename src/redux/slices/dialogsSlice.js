import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCreateDialog = createAsyncThunk(
  "dialogs/fetchCreateDialog",
  async (id) => {
    const { data } = await axios.post(`/dialogs/${id}`);
    return data;
  }
);

export const fetchDeleteDialog = createAsyncThunk(
  "dialogs/fetchDeleteDialog",
  async (id) => {
    const { data } = await axios.delete(`/dialogs/${id}`);
    return data;
  }
);

export const fetchGetDialog = createAsyncThunk(
  "dialogs/fetchGetDialog",
  async (id) => {
    const { data } = await axios.get(`/dialogs/${id}`);
    return data;
  }
);

const initialState = {
  dialog: {},
  status: null,
};

const dialogsSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    clearDialog: (state) => {
      state.dialog = {};
    },
  },
  selectors: {
    selectorDialog: (state) => state.dialog,
    selectorStatusDialog: (state) => state.status,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCreateDialog.pending, (state) => {
      state.dialog = {};
    });
    builder.addCase(fetchCreateDialog.fulfilled, (state, action) => {
      state.dialog = action.payload;
    });
    builder.addCase(fetchCreateDialog.rejected, (state) => {
      state.dialog = {};
    });

    builder.addCase(fetchDeleteDialog.pending, (state) => {
      state.dialog = {};
    });
    builder.addCase(fetchDeleteDialog.fulfilled, (state, action) => {
      state.dialog = action.payload;
    });
    builder.addCase(fetchDeleteDialog.rejected, (state) => {
      state.dialog = {};
    });

    builder.addCase(fetchGetDialog.pending, (state) => {
      state.dialog = {};
    });
    builder.addCase(fetchGetDialog.fulfilled, (state, action) => {
      state.dialog = action.payload;
    });
    builder.addCase(fetchGetDialog.rejected, (state) => {
      state.dialog = {};
    });
  },
});

export const { clearDialog } = dialogsSlice.actions;
export const { selectorDialog, selectorStatusDialog } = dialogsSlice.selectors;

export const dialogsReducer = dialogsSlice.reducer;

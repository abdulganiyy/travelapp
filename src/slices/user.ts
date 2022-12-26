import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { auth } from "../services/auth";

export const authenticate = createAsyncThunk(
  "user/authenticate",
  async (data, { rejectWithValue }) => {
    try {
      const userData = await auth(data);

      return userData;
    } catch (error) {
      return rejectWithValue("Please try again");
    }
  }
);

const user = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: "",
    username: "",
  },
  reducers: {},
  extraReducers: {
    ["authenticate.pending"]: (state, action) => {
      state.isLoading = true;
    },
    ["authenticate.fulfilled"]: (state, action) => {
      state.username = action.payload;
      state.isLoading = false;
    },
    ["authenticate.rejected"]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default user.reducer;

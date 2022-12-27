import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { auth } from "../services/auth";

// import {RootState} from "../store"

type UserState = {
  email: string;
  isLoading: boolean;
  errorMessage: string;
};

//   type User = {
//     username: string;
//     isLoading: boolean;
//     error: string;
//   };

export const authenticate = createAsyncThunk(
  "user/authenticate",
  async (data: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const userData = await auth(data);
      localStorage.setItem("userData", JSON.stringify(userData));
      return userData.email;
    } catch (error: any) {
      return rejectWithValue("Please try again");
    }
  }
);

const initialState: UserState = {
  isLoading: false,
  errorMessage: "",
  email: "",
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userData");
      state.email = "";
    },
    loadUserData: (state) => {
      let userData = JSON.parse(localStorage.getItem("userData") || "{}");
      state.email = userData && userData.email;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        authenticate.fulfilled,
        (state, { payload }: PayloadAction<string>) => {
          state.isLoading = false;
          state.email = payload;
        }
      )
      .addCase(
        authenticate.rejected,
        (state, { payload }: PayloadAction<any>) => {
          state.isLoading = false;
          state.errorMessage = payload;
        }
      );
  },
});

export const { loadUserData, logout } = user.actions;

export default user.reducer;

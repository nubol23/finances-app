import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthData, RefreshTokenData } from "../../common/types/authTypes";

interface AuthState {
  value: AuthData;
}

const initialState: AuthState = {
  value: JSON.parse(localStorage.getItem("session") || "{}"),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthData>) => {
      state.value = action.payload;
      localStorage.setItem("session", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.value = {};
      localStorage.setItem("session", "{}");
    },
    refreshToken: (state, action: PayloadAction<RefreshTokenData>) => {
      state.value.accessToken = action.payload.accessToken;
    },
  },
});

export const { login, logout, refreshToken } = authSlice.actions;

export default authSlice.reducer;

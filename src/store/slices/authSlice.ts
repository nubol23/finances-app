import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthData } from "../../common/types/authTypes";

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
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

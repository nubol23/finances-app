import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthData {
  accessToken?: string;
  refreshToken?: string;
  issuedAt?: number;
  expiresAt?: number;
  userId?: string;
  name?: string;
  email?: string;
}

interface AuthState {
  value: AuthData;
}

const initialState: AuthState = {
  value: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthData>) => {
      state.value = action.payload;
    },
    logout: state => {
      state.value = {}
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

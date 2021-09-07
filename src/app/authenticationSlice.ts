import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface AuthenticationState {
  isAuthenticated: boolean;
}

const initialState: AuthenticationState = {
  isAuthenticated: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    authenticationSuccess: (state) => {
      state.isAuthenticated = true;
    },
    authenticationFailure: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { authenticationSuccess, authenticationFailure } =
  counterSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.authentication.isAuthenticated;

export default counterSlice.reducer;

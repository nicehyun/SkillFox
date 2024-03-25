import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

type InitialSignInState = {
  isSignInSuccess: boolean;
};

const initialSignUpState: InitialSignInState = {
  isSignInSuccess: false,
};

const signInSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    signIn(state) {
      state.isSignInSuccess = true;
    },
    signout(state) {
      state.isSignInSuccess = false;
    },
  },
});

export const { signIn, signout } = signInSlice.actions;

export const selectSignInState = (state: RootState) => state.signIn;

export default signInSlice.reducer;

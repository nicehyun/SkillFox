import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

type InitialSignUpState = {
  activeStep: number;
};

const initialSignUpState: InitialSignUpState = {
  activeStep: 0,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState: initialSignUpState,
  reducers: {
    nextStep(state) {
      if (state.activeStep === 6) return;

      state.activeStep = state.activeStep + 1;
    },
    resetStep(state) {
      state.activeStep = 0;
    },
  },
});

export const { nextStep, resetStep } = signUpSlice.actions;

export const selectSignUpStepState = (state: RootState) =>
  state.signUp.activeStep;

export default signUpSlice.reducer;

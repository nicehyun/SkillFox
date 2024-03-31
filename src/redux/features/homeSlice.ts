import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

type InitialHomeState = {
  activeStep: number;
};

const initialSignUpState: InitialHomeState = {
  activeStep: 1,
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialSignUpState,
  reducers: {
    nextStep(state) {
      if (state.activeStep === 1) return;

      state.activeStep = state.activeStep + 1;
    },
    resetStep(state) {
      state.activeStep = 0;
    },
  },
});

export const { nextStep, resetStep } = homeSlice.actions;

export const selectHomeStepState = (state: RootState) => state.home.activeStep;

export default homeSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

interface ISelectSkillPayload {
  skill: string;
}

type InitialHomeState = {
  activeStep: number;
  selectedSkill: string | null;
};

const initialSignUpState: InitialHomeState = {
  activeStep: 1,
  selectedSkill: "next.js",
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
    selectSkill(state, action: PayloadAction<ISelectSkillPayload>) {
      state.selectedSkill = action.payload.skill;
    },
  },
});

export const { nextStep, resetStep } = homeSlice.actions;

export const selectHomeStepState = (state: RootState) => state.home.activeStep;

export const selectNpmSkillState = (state: RootState) =>
  state.home.selectedSkill;

export default homeSlice.reducer;

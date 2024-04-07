import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

interface ISelectShowCountPayload {
  count: number;
}

type InitialSkillFrequencyState = {
  showChartCount: number;
};

const initialSkillFrequencyState: InitialSkillFrequencyState = {
  showChartCount: 20,
};

const skillFrequencySlice = createSlice({
  name: "skillFrequency",
  initialState: initialSkillFrequencyState,
  reducers: {
    selcetShowCount(state, actions: PayloadAction<ISelectShowCountPayload>) {
      state.showChartCount = actions.payload.count;
    },
  },
});

export const { selcetShowCount } = skillFrequencySlice.actions;

export const selectShowChartCountState = (state: RootState) =>
  state.skillFrequency.showChartCount;

export default skillFrequencySlice.reducer;

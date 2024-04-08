import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

interface ISelectShowCountPayload {
  count: number;
}

type InitialShowChartCountSlice = {
  showBarChartCount: number;
};

const initialShowChartCountState: InitialShowChartCountSlice = {
  showBarChartCount: 20,
};

const ShowChartCountSlice = createSlice({
  name: "showChartCount",
  initialState: initialShowChartCountState,
  reducers: {
    selcetShowBarChartCount(
      state,
      actions: PayloadAction<ISelectShowCountPayload>,
    ) {
      state.showBarChartCount = actions.payload.count;
    },
  },
});

export const { selcetShowBarChartCount } = ShowChartCountSlice.actions;

export const selectShowBarChartCountState = (state: RootState) =>
  state.showChartCount.showBarChartCount;

export default ShowChartCountSlice.reducer;

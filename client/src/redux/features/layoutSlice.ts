import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

type InitialLayoutState = {
  showNavigation: boolean;
};

const initialLayoutState: InitialLayoutState = {
  showNavigation: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: initialLayoutState,
  reducers: {
    showNavigation(state) {
      state.showNavigation = true;
    },
    hideNavigation(state) {
      state.showNavigation = false;
    },
    toggleShowNavigation(state) {
      state.showNavigation = !state.showNavigation;
    },
  },
});

export const { showNavigation, hideNavigation, toggleShowNavigation } =
  layoutSlice.actions;

export const selectShowNavigationState = (state: RootState) =>
  state.layoutSlice.showNavigation;

export default layoutSlice.reducer;

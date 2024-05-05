import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

type InitialLayoutState = {
  showNavigation: boolean;
  showTooltipModal: boolean;
};

const initialLayoutState: InitialLayoutState = {
  showNavigation: false,
  showTooltipModal: false,
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
    showTooltipModal(state) {
      state.showTooltipModal = true;
    },
    hideTooltipModal(state) {
      state.showTooltipModal = false;
    },
  },
});

export const {
  showNavigation,
  hideNavigation,
  toggleShowNavigation,
  showTooltipModal,
  hideTooltipModal,
} = layoutSlice.actions;

export const selectShowNavigationState = (state: RootState) =>
  state.layoutSlice.showNavigation;

export const selectShowTooltipModalState = (state: RootState) =>
  state.layoutSlice.showTooltipModal;

export default layoutSlice.reducer;

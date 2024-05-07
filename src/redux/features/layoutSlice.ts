import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

interface IShowTooltipPayload {
  page: number;
}

type TootipModal = {
  isShowTooltipModal: boolean;
  currentTooltipPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
};

type InitialLayoutState = {
  showNavigation: boolean;
  tootipModalState: TootipModal;
};

const initialLayoutState: InitialLayoutState = {
  showNavigation: false,
  tootipModalState: {
    currentTooltipPage: 1,
    isShowTooltipModal: false,
    isFirstPage: false,
    isLastPage: false,
  },
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
    showTooltipModal(state, actions: PayloadAction<IShowTooltipPayload>) {
      state.tootipModalState.isShowTooltipModal = true;

      const { page } = actions.payload;
      state.tootipModalState.currentTooltipPage = page;

      if (page === 1) {
        state.tootipModalState.isFirstPage = true;
      }

      if (page === 4) {
        state.tootipModalState.isLastPage = true;
      }
    },
    hideTooltipModal(state) {
      state.tootipModalState.currentTooltipPage = 1;
      state.tootipModalState.isShowTooltipModal = false;
      state.tootipModalState.isFirstPage = false;
      state.tootipModalState.isLastPage = false;
    },
    prevTooltipPage(state) {
      if (state.tootipModalState.currentTooltipPage === 1) return;

      state.tootipModalState.currentTooltipPage =
        state.tootipModalState.currentTooltipPage - 1;

      if (state.tootipModalState.currentTooltipPage === 1) {
        state.tootipModalState.isFirstPage = true;
        return;
      }

      state.tootipModalState.isLastPage = false;
    },
    nextTooltipPage(state) {
      if (state.tootipModalState.currentTooltipPage === 4) return;
      state.tootipModalState.currentTooltipPage =
        state.tootipModalState.currentTooltipPage + 1;

      if (state.tootipModalState.currentTooltipPage === 4) {
        state.tootipModalState.isLastPage = true;
        return;
      }
      state.tootipModalState.isFirstPage = false;
    },
  },
});

export const {
  showNavigation,
  hideNavigation,
  toggleShowNavigation,
  showTooltipModal,
  hideTooltipModal,
  prevTooltipPage,
  nextTooltipPage,
} = layoutSlice.actions;

export const selectShowNavigationState = (state: RootState) =>
  state.layoutSlice.showNavigation;

export const selectTooltipModalState = (state: RootState) =>
  state.layoutSlice.tootipModalState;

export default layoutSlice.reducer;

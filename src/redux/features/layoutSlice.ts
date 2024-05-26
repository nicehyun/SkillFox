import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

export interface IShowTooltipPayload {
  page: number;
}

type TootipModal = {
  isShowTooltipModal: boolean;
  currentTooltipPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
};

type InitialLayoutState = {
  isShowNavigation: boolean;
  tootipModalState: TootipModal;
};

const initialLayoutState: InitialLayoutState = {
  isShowNavigation: false,
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
      state.isShowNavigation = true;
    },
    hideNavigation(state) {
      state.isShowNavigation = false;
    },
    toggleShowNavigation(state) {
      state.isShowNavigation = !state.isShowNavigation;
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

export const isShowNavigationState = (state: RootState) =>
  state.layoutSlice.isShowNavigation;

export const isShowTooltipModalState = (state: RootState) =>
  state.layoutSlice.tootipModalState.isShowTooltipModal;

export const currentTooltipPageState = (state: RootState) =>
  state.layoutSlice.tootipModalState.currentTooltipPage;

export const isFirstPageState = (state: RootState) =>
  state.layoutSlice.tootipModalState.isFirstPage;

export const isLastPageState = (state: RootState) =>
  state.layoutSlice.tootipModalState.isLastPage;

export default layoutSlice.reducer;

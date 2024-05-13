import { Meta, StoryObj } from "@storybook/react";
import TooltipModal, { ITooltipModalProps } from "./TooltipModal";
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { IShowTooltipPayload } from "@/redux/features/layoutSlice";
import { Provider } from "react-redux";

const meta: Meta<ITooltipModalProps> = {
  title: "Common/Organisms/TooltipModal",
  component: TooltipModal,
  tags: ["autodocs"],
  argTypes: {
    closeIconSize: {
      control: "radio",
      defaultValue: "small",
      description: "close 아이콘의 사이즈를 결정합니다.",
    },
  },
};

export default meta;

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    tootipModalState: {
      currentTooltipPage: 1,
      isShowTooltipModal: true,
      isFirstPage: false,
      isLastPage: false,
    },
  },
  reducers: {
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

const store = configureStore({
  reducer: {
    layoutSlice: layoutSlice.reducer,
  },
});

export const Default: StoryObj<ITooltipModalProps> = {
  decorators: (story) => <Provider store={store}>{story()}</Provider>,
};

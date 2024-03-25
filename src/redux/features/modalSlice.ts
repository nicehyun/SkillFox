import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types/store";

interface ShowBasicModalPayload {
  id: string;
}

export type FeedbackType = "success" | "error";

interface ShowFeedbackModal {
  type: FeedbackType;
  content: string;
}

type BasicModal = {
  id: string;
  isShowModal: boolean;
};

type FeedbackModal = {
  isShowModal: boolean;
  type: FeedbackType | "";
  content: string;
};

type InitialModalState = {
  basicModal: BasicModal;
  feedbackModal: FeedbackModal;
};

const initialModalState: InitialModalState = {
  basicModal: {
    id: "",
    isShowModal: false,
  },
  feedbackModal: {
    isShowModal: false,
    type: "",
    content: "",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showBasicModal(state, actions: PayloadAction<ShowBasicModalPayload>) {
      state.basicModal.id = actions.payload.id;
      state.basicModal.isShowModal = true;
    },
    hideBasicModal(state) {
      state.basicModal.isShowModal = false;
      state.basicModal.id = "";
    },
    showFeedbackModal(state, action: PayloadAction<ShowFeedbackModal>) {
      state.feedbackModal.isShowModal = true;

      const { content, type } = action.payload;
      state.feedbackModal.content = content;
      state.feedbackModal.type = type;
    },
    hideFeedbackModal(state) {
      state.feedbackModal.isShowModal = false;
      state.feedbackModal.content = "";
    },
  },
});

export const {
  showBasicModal,
  hideBasicModal,
  showFeedbackModal,
  hideFeedbackModal,
} = modalSlice.actions;

export const selectBasicModalState = (state: RootState) =>
  state.modal.basicModal;

export const selectFeedbackModalState = (state: RootState) =>
  state.modal.feedbackModal;

export default modalSlice.reducer;

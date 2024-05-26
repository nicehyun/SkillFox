import {
  hideTooltipModal,
  isShowTooltipModalState,
  showTooltipModal,
} from "@/redux/features/layoutSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const useTooltipModalController = () => {
  const dispatch = useAppDispatch();
  const isShowTooltipModal = useAppSelector(isShowTooltipModalState);

  return {
    isShowTooltipModal,
    showTooltipModal: (page: number) => dispatch(showTooltipModal({ page })),
    hideTooltipModal: () => dispatch(hideTooltipModal()),
  };
};

import {
  hideTooltipModal,
  showTooltipModal,
} from "@/redux/features/layoutSlice";
import { useAppDispatch } from "@/redux/hooks";

export const useTooltipModalController = () => {
  const dispatch = useAppDispatch();

  return {
    showTooltipModal: (page: number) => dispatch(showTooltipModal({ page })),
    hideTooltipModal: () => dispatch(hideTooltipModal()),
  };
};

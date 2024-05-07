"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import IconButton from "../atoms/IconButton";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import {
  nextTooltipPage,
  prevTooltipPage,
  selectTooltipModalState,
} from "@/redux/features/layoutSlice";

const TooltipModalPageController = () => {
  const { currentTooltipPage, isFirstPage, isLastPage } = useAppSelector(
    selectTooltipModalState,
  );

  const dispatch = useAppDispatch();
  return (
    <div className="flexCenter absolute inset-x-0 bottom-6">
      <IconButton
        icon={<FaCaretLeft />}
        onClick={() => dispatch(prevTooltipPage())}
        className={isFirstPage ? "cursor-not-allowed text-border" : ""}
      />
      <span className="mx-6">{currentTooltipPage} / 4</span>

      <IconButton
        icon={<FaCaretRight />}
        onClick={() => dispatch(nextTooltipPage())}
        className={isLastPage ? "cursor-not-allowed text-border" : ""}
      />
    </div>
  );
};

export default TooltipModalPageController;

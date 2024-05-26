"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import IconButton from "../atoms/IconButton";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import {
  currentTooltipPageState,
  isFirstPageState,
  isLastPageState,
  nextTooltipPage,
  prevTooltipPage,
} from "@/redux/features/layoutSlice";

const TooltipModalPageController = () => {
  const currentTooltipPage = useAppSelector(currentTooltipPageState);
  const isFirstPage = useAppSelector(isFirstPageState);
  const isLastPage = useAppSelector(isLastPageState);

  const dispatch = useAppDispatch();
  return (
    <div className="flexCenter absolute inset-x-0 bottom-6">
      <IconButton
        id="button-prev-page"
        ariaLabel="이전 페이지로 이동"
        icon={<FaCaretLeft />}
        onClick={() => dispatch(prevTooltipPage())}
        className={isFirstPage ? "cursor-not-allowed text-border" : ""}
      />
      <span
        role="status"
        aria-live="polite"
        aria-label="현재 페이지"
        className="mx-6"
      >
        {currentTooltipPage} / 4
      </span>

      <IconButton
        id="button-next-page"
        ariaLabel="다음 페이지로 이동"
        icon={<FaCaretRight />}
        onClick={() => dispatch(nextTooltipPage())}
        className={isLastPage ? "cursor-not-allowed text-border" : ""}
      />
    </div>
  );
};

export default TooltipModalPageController;

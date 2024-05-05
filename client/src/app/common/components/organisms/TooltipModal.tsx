"use client";

import Icon from "../atoms/Icon";
import { IoMdClose } from "react-icons/io";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  hideTooltipModal,
  selectShowTooltipModalState,
} from "@/redux/features/layoutSlice";

const TooltipModal = () => {
  const dispatch = useAppDispatch();
  const isShowTooltipModal = useAppSelector(selectShowTooltipModalState);
  return (
    <>
      {isShowTooltipModal && (
        <div className="flexCenter fixed inset-0 z-40 bg-border bg-opacity-50">
          <div className="absolute z-40 h-2/3 max-h-[800px] w-2/3 max-w-[600px] rounded-[5px] bg-white p-6 shadow">
            <button
              onClick={() => dispatch(hideTooltipModal())}
              className="absolute right-6 h-[32px] w-[32px] rounded-[5px]"
            >
              <Icon icon={<IoMdClose />} />
            </button>

            <h3 className="mb-6 mt-6 font-bold">📊 title</h3>

            <p className="mb-6">tooltip contents</p>

            <div className="flexCenter absolute inset-x-0 bottom-6">
              <button className="h-[32px] w-[32px] rounded-[5px]">
                <Icon icon={<FaCaretLeft />} />
              </button>
              <span className="mx-6">1/10</span>
              <button className="h-[32px] w-[32px] rounded-[5px]">
                <Icon icon={<FaCaretRight />} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TooltipModal;

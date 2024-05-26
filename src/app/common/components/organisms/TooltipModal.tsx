"use client";

import { IoMdClose } from "react-icons/io";
import IconButton from "../atoms/IconButton";
import TooltipModalPageController from "../molecules/TooltipModalPageController";
import TooltipModalContent from "../molecules/TooltipModalContent";
import TooltipModalTitle from "../atoms/TooltipModalTitle";
import { IconSize } from "../atoms/Icon";
import {
  hideTooltipModal,
  isShowTooltipModalState,
} from "@/redux/features/layoutSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export interface ITooltipModalProps {
  closeIconSize?: IconSize;
}

const TooltipModal = ({ closeIconSize = "small" }: ITooltipModalProps) => {
  const dispatch = useAppDispatch();
  const isShowTooltipModal = useAppSelector(isShowTooltipModalState);

  return (
    <>
      {isShowTooltipModal && (
        <div
          onClick={() => dispatch(hideTooltipModal())}
          className="flexCenter fixed inset-0 z-40 cursor-default bg-border bg-opacity-50"
        >
          <section
            id="modal-tooltip"
            onClick={(event) => event.stopPropagation()}
            className="absolute z-40 flex h-2/3 max-h-[800px] w-2/3 max-w-[600px] flex-col rounded-[5px] bg-white p-6 shadow"
          >
            <IconButton
              id="modal-tooltip-button-close"
              ariaControls="modal-tooltip"
              icon={<IoMdClose />}
              iconSize={closeIconSize}
              onClick={() => dispatch(hideTooltipModal())}
              className="absolute right-6"
              ariaLabel="close tooltip modal"
            />

            <TooltipModalTitle />

            <TooltipModalContent />

            <TooltipModalPageController />
          </section>
        </div>
      )}
    </>
  );
};

export default TooltipModal;

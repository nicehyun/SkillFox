"use client";

import { IoMdClose } from "react-icons/io";
import { useAppSelector } from "@/redux/hooks";
import {
  currentTooltipPageState,
  isShowTooltipModalState,
} from "@/redux/features/layoutSlice";
import IconButton from "../atoms/IconButton";
import TooltipModalPageController from "../molecules/TooltipModalPageController";
import TooltipModalContent from "../molecules/TooltipModalContent";
import TooltipModalTitle from "../atoms/TooltipModalTitle";
import { useTooltipModalController } from "../../hooks/useTooltipModalController";
import { IconSize } from "../atoms/Icon";

export interface ITooltipModalProps {
  closeIconSize?: IconSize;
}

const TooltipModal = ({ closeIconSize = "small" }: ITooltipModalProps) => {
  const isShowTooltipModal = useAppSelector(isShowTooltipModalState);
  const currentTooltipPage = useAppSelector(currentTooltipPageState);

  const { hideTooltipModal } = useTooltipModalController();

  return (
    <>
      {isShowTooltipModal && (
        <section
          id="modal-tooltip"
          onClick={hideTooltipModal}
          className="flexCenter fixed inset-0 z-40 cursor-default bg-border bg-opacity-50"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="absolute z-40 flex h-2/3 max-h-[800px] w-2/3 max-w-[600px] flex-col rounded-[5px] bg-white p-6 shadow"
          >
            <IconButton
              id="modal-tooltip-button-close"
              ariaControls="modal-tooltip"
              icon={<IoMdClose />}
              iconSize={closeIconSize}
              onClick={hideTooltipModal}
              className="absolute right-6"
              ariaLabel="close tooltip modal"
            />

            <TooltipModalTitle />

            <TooltipModalContent currentTooltipPage={currentTooltipPage} />

            <TooltipModalPageController />
          </div>
        </section>
      )}
    </>
  );
};

export default TooltipModal;

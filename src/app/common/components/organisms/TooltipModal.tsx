"use client";

import { IoMdClose } from "react-icons/io";
import { useAppSelector } from "@/redux/hooks";
import { selectTooltipModalState } from "@/redux/features/layoutSlice";
import IconButton from "../atoms/IconButton";
import TooltipModalPageController from "../molecules/TooltipModalPageController";
import TooltipModalContent from "../molecules/TooltipModalContent";
import TooltipModalTitle from "../atoms/TooltipModalTitle";
import { useTooltipModalController } from "../../hooks/useTooltipModalController";

const TooltipModal = () => {
  const { isShowTooltipModal } = useAppSelector(selectTooltipModalState);
  const { hideTooltipModal } = useTooltipModalController();

  return (
    <>
      {isShowTooltipModal && (
        <section
          onClick={hideTooltipModal}
          className="flexCenter fixed inset-0 z-40 cursor-default bg-border bg-opacity-50"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="absolute z-40 flex h-2/3 max-h-[800px] w-2/3 max-w-[600px] flex-col rounded-[5px] bg-white p-6 shadow"
          >
            <IconButton
              icon={<IoMdClose />}
              onClick={hideTooltipModal}
              className="absolute right-6"
            />

            <TooltipModalTitle />

            <TooltipModalContent />

            <TooltipModalPageController />
          </div>
        </section>
      )}
    </>
  );
};

export default TooltipModal;

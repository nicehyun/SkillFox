"use client";

import { IconSize } from "../atoms/Icon";
import { FaRegQuestionCircle } from "react-icons/fa";
import IconButton from "../atoms/IconButton";
import { useAppSelector } from "@/redux/hooks";
import { isShowTooltipModalState } from "@/redux/features/layoutSlice";

export interface IToolTipProps {
  analysisClassification: string;
  onClick: () => void;
  iconSize?: IconSize;
}

const ToolTipButton = ({
  analysisClassification,
  onClick,
  iconSize = "small",
}: IToolTipProps) => {
  const isShowToolTipModal = useAppSelector(isShowTooltipModalState);
  return (
    <IconButton
      id="button-tooltip"
      ariaHasPopup="dialog"
      ariaControls=""
      ariaLabel={`${analysisClassification} 가이드`}
      icon={<FaRegQuestionCircle />}
      iconSize={iconSize}
      iconClassName="text-gray1"
      onClick={onClick}
      ariaExpanded={isShowToolTipModal}
    />
  );
};

export default ToolTipButton;

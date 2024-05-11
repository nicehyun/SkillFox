import { IconSize } from "../atoms/Icon";
import { FaRegQuestionCircle } from "react-icons/fa";
import IconButton from "../atoms/IconButton";

export interface IToolTipProps {
  isOpen: boolean;
  analysisClassification: string;
  onClick: () => void;
  iconSize?: IconSize;
}

const ToolTipButton = ({
  isOpen,
  analysisClassification,
  onClick,
  iconSize = "small",
}: IToolTipProps) => {
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
      ariaExpanded={isOpen}
    />
  );
};

export default ToolTipButton;

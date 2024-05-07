import Icon from "../atoms/Icon";
import { FaRegQuestionCircle } from "react-icons/fa";

interface IToolTipProps {
  ariaLabel: string;
  onClick: () => void;
}

const ToolTipButton = ({ ariaLabel, onClick }: IToolTipProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-haspopup="true"
      aria-controls="tooltip-content"
    >
      <Icon
        icon={<FaRegQuestionCircle />}
        size="small"
        className="text-gray1"
      />
    </button>
  );
};

export default ToolTipButton;

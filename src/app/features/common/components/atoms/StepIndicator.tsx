import { FaCheck } from "react-icons/fa";
import { IColorProps } from "../../types";
import { bgColorClasses } from "../../utils/classes";

export interface IStepIndicatorProps extends IColorProps {
  isCompleted: boolean;
  isActive: boolean;
  stepNumber: number;
}

const StepIndicator = ({
  color = "primary",
  isActive,
  isCompleted,
  stepNumber,
}: IStepIndicatorProps) => {
  return (
    <span
      aria-label={`Step ${stepNumber}: ${isActive ? "Currently Active" : isCompleted ? "Completed" : "Not Completed"}`}
      role="status"
      className={`${
        isActive || isCompleted ? bgColorClasses[color] : "bg-gray3"
      } flexCenter h-6 w-6 rounded-full text-small text-white`}
    >
      {isCompleted ? <FaCheck /> : stepNumber}
    </span>
  );
};

export default StepIndicator;

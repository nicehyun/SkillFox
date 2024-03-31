import { Color } from "../../types";
import { bgColorClasses } from "../../utils/classes";

export interface IButtonProps {
  id: string;
  color?: Color;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  content: string;
  className?: string;
  testId?: string;
}

const Button = ({
  id,
  color = "primary",
  content,
  onClick,
  type = "button",
  className,
  testId,
}: IButtonProps) => {
  return (
    <button
      id={`button-${id}`}
      type={type}
      className={`${className} ${bgColorClasses[color]} ${color === "primary" ? "text-secondary" : "text-white"} w-full rounded-[5px] py-4 text-medium font-bold sm:text-small md:text-normal`}
      onClick={onClick}
      data-cy={testId}
    >
      {content}
    </button>
  );
};

export default Button;

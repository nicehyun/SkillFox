import { ReactNode } from "react";
import { Aria } from "../../types";

export interface IButtonProps
  extends Pick<Aria, "ariaLabel" | "ariaControls" | "ariaHasPopup"> {
  id: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  content: ReactNode;
  className?: string;
  disabled?: boolean;
  dataCy?: string;
}

const Button = ({
  id,
  content,
  onClick,
  type = "button",
  className,
  dataCy,
  ariaLabel,
  ariaControls,
  ariaHasPopup,
  disabled,
}: IButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      id={`button-${id}`}
      type={type}
      className={`${className} w-full rounded-[5px] bg-border p-[5px] text-xs font-bold text-black2 disabled:cursor-not-allowed`}
      onClick={onClick}
      data-cy={dataCy}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;

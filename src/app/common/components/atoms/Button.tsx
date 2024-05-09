import { ReactNode } from "react";

export interface IButtonProps {
  id: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  content: ReactNode;
  className?: string;
  disabled?: boolean;
  dataCy?: string;
  // 버튼의 기능
  ariaLabel: string;
  // 버튼이 띄우는 팝업 종류
  ariaHaspopup?:
    | "true"
    | "false"
    | "dialog"
    | "menu"
    | "listbox"
    | "tree"
    | "grid";
  // 버튼에 의해 제어되고 표시되는 팝업 또는 모달 요소의 실제 ID를 참조
  ariaControls?: string;
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
  ariaHaspopup,
  disabled,
}: IButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-haspopup={ariaHaspopup}
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

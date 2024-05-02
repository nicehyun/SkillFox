import { ReactNode } from "react";
import { bgColorClasses } from "../../utils/classes";
import { IColorProps } from "../../types";

export interface IButtonProps extends IColorProps {
  id: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  content: ReactNode;
  className?: string;
  disabled?: boolean;
  testId?: string;
  // 버튼의 기능을 명확하게 설명
  ariaLabel?: string;
  // 이 속성은 사용자가 버튼을 활성화하면 팝업 (대화상자, 메뉴 등)이 나타나는 것을 예상
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
  color = "gray",
  content,
  onClick,
  type = "button",
  className,
  testId,
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
      className={`${className} ${color === "gray" ? "" : "border-[1px] border-border"} ${bgColorClasses[color]} w-full rounded-[5px] p-[5px] text-xs font-bold text-black2 disabled:cursor-not-allowed`}
      onClick={onClick}
      data-cy={testId}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;

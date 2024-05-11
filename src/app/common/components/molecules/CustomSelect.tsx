import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Icon from "../atoms/Icon";
import useOutsideClick from "../../hooks/useOutSideClick";

export interface ICustomSelectProps {
  id: string;
  options: number[];
  className?: string;
  defalutSelectContent: string;
  selectValue: number;
  onChangeSelectValue: (value: number) => void;
}

export const CustomSelect = ({
  id,
  options,
  defalutSelectContent,
  className,
  onChangeSelectValue,
  selectValue,
}: ICustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(wrapperRef, () => setIsOpen(false));

  const handleSelect = (value: number) => {
    onChangeSelectValue(value);
    setIsOpen(false);
  };

  const handleSelectToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleEnterKeyDown = (
    event: KeyboardEvent<HTMLDivElement>,
    cb: () => void,
  ) => {
    if (event.key === "Enter") {
      cb();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (wrapperRef.current && !wrapperRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className={`${className} relative inline-block`}
      aria-labelledby={`select-label-${id}`}
      role="listbox" // combobox를 listbox로 변경
      aria-busy="true"
    >
      <div
        className="flex w-full items-center justify-between rounded-[5px] border-[1px] border-border bg-border p-[5px] text-xs text-black2 shadow hover:cursor-pointer focus:border-primary focus:outline-none"
        onClick={handleSelectToggle}
        id={`select-label-${id}`}
        tabIndex={0}
        onKeyDown={(event) => handleEnterKeyDown(event, handleSelectToggle)}
        // 키보드 접근성 추가
      >
        {`${defalutSelectContent} : `}
        <strong>{selectValue}</strong>
        <Icon icon={<FaAngleDown />} />
      </div>

      {isOpen && (
        <div
          className="absolute z-20 mt-2 w-full rounded-[5px] bg-white text-xs shadow"
          id={`select-list-${id}`}
          aria-controls={`select-list-${id}`} // combobox 제어하는 목록 식별
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-border"
              onClick={() => handleSelect(option)}
              onKeyDown={(event) =>
                handleEnterKeyDown(event, () => handleSelect(option))
              }
              role="option"
              id={`select-option-${id}-${option}`}
              aria-selected={selectValue === option} // 현재 선택된 옵션 표시
              tabIndex={0}
            >
              {`${option}개 표시하기`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

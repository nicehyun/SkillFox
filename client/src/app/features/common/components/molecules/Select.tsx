import { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Icon from "../atoms/Icon";
import useOutsideClick from "../../hooks/useOutSideClick";

interface ICustomSelectProps {
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
      role="listbox"
      aria-activedescendant={`select-option-${id}-${selectValue}`}
      aria-expanded={isOpen}
    >
      <div
        className="flex w-full items-center justify-between rounded-[5px] bg-border p-[5px] text-xs text-black2 shadow hover:cursor-pointer focus:outline-none"
        onClick={() => setIsOpen((prev) => !prev)}
        id={`select-label-${id}`}
      >
        {`${defalutSelectContent} : `}
        <strong>{selectValue}</strong>
        <Icon icon={<FaAngleDown />} />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-[5px] bg-white text-xs shadow">
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-border"
              onClick={() => handleSelect(option)}
              role="option"
              id={`select-option-${id}-${option}`}
              aria-selected={selectValue === option}
            >
              {`${option}개 표시하기`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

import { KeyboardEvent, useEffect, useRef, useState } from "react";
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
      aria-expanded={isOpen}
      // 셀렉트 박스를 활성화할 때 리스트박스가 표시될 것임을 나타냄
      aria-haspopup="listbox"
      // 셀렉트 박스의 레이블을 식별하는 데 사용됩니다. 이 컴포넌트의 경우, 사용자가 선택한 값을 표시하는 div 요소에 레이블이 적절히 제공되도록 설정
      aria-labelledby={`select-label-${id}`}
    >
      <div
        className="flex w-full items-center justify-between rounded-[5px] border-[1px] border-border bg-border p-[5px] text-xs text-black2 shadow hover:cursor-pointer focus:border-primary focus:outline-none"
        onClick={handleSelectToggle}
        id={`select-label-${id}`}
        // 키보드 접근성 추가
        tabIndex={0}
        onKeyDown={(event) => handleEnterKeyDown(event, handleSelectToggle)}
      >
        {`${defalutSelectContent} : `}
        <strong>{selectValue}</strong>
        <Icon icon={<FaAngleDown />} />
      </div>

      {isOpen && (
        <div
          className="absolute z-20 mt-2 w-full rounded-[5px] bg-white text-xs shadow"
          id={`select-list-${id}`}
          // 토글된 엘리먼트(여기서는 옵션 목록)의 ID
          aria-controls={`select-list-${id}`}
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
              // 요소가 현재 선택된 상태인지 아닌지
              aria-selected={selectValue === option}
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

import { Aria } from "@/app/common/types";
import { ChangeEvent } from "react";

export interface IRangeInputProps extends Aria {
  min: number;
  max: number;
  currentValue: number;
  onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput = ({
  min,
  max,
  currentValue,
  onChangeValue,
  ariaLabel,
}: IRangeInputProps) => {
  return (
    <input
      type="range"
      role="slider"
      aria-label={ariaLabel}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={currentValue}
      step="1"
      min={min}
      max={max}
      value={currentValue}
      onChange={onChangeValue}
      className="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
    />
  );
};

export default RangeInput;

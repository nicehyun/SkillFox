"use client";

import { ChangeEvent, useEffect, useState } from "react";
import RangeInput from "../atoms/RangeInput";
import DualRangeSlider from "./DualRangeSlider";

export interface IDualRangeSliderLayoutProps {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChangeMinValue: (value: number) => void;
  onChangeMaxValue: (value: number) => void;
  className?: string;
}

const DualRangeSliderLayout = ({
  max,
  min,
  currentMax,
  currentMin,
  onChangeMaxValue,
  onChangeMinValue,
  className,
}: IDualRangeSliderLayoutProps) => {
  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(100);

  useEffect(() => {
    setMinThumb(((currentMin - min) / (max - min)) * 100);
  }, [currentMin, min, max]);

  useEffect(() => {
    setMaxThumb(100 - ((currentMax - min) / (max - min)) * 100);
  }, [currentMax, min, max]);

  const handleMinValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMinValue = Math.min(Number(event.target.value), currentMax - 1);
    onChangeMinValue(newMinValue);
  };

  const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Math.max(Number(event.target.value), currentMin + 1);
    onChangeMaxValue(newMaxValue);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-full">
        <RangeInput
          currentValue={currentMin}
          min={min}
          max={max}
          onChangeValue={handleMinValueChange}
          ariaLabel="select minimum value"
        />

        <RangeInput
          currentValue={currentMax}
          min={min}
          max={max}
          onChangeValue={handleMaxValueChange}
          ariaLabel="select maximum value"
        />

        <DualRangeSlider maxThumb={maxThumb} minThumb={minThumb} />
      </div>
    </div>
  );
};

export default DualRangeSliderLayout;

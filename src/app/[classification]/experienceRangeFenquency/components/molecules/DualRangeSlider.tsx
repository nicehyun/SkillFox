"use client";

import { ChangeEvent, useEffect, useState } from "react";

interface IDualRangeSliderProps {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChangeMinValue: (value: number) => void;
  onChangeMaxValue: (value: number) => void;
  className?: string;
}

const DualRangeSlider = ({
  max,
  min,
  currentMax,
  currentMin,
  onChangeMaxValue,
  onChangeMinValue,
  className,
}: IDualRangeSliderProps) => {
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
        <input
          type="range"
          step="1"
          min={min}
          max={max}
          value={currentMin}
          onChange={handleMinValueChange}
          className="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
        />

        <input
          type="range"
          step="1"
          min={min}
          max={max}
          value={currentMax}
          onChange={handleMaxValueChange}
          className="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
        />

        <div className="relative z-10 h-2">
          <div className="absolute inset-0 z-10 rounded-md bg-gray1"></div>
          <div
            className="absolute inset-y-0 z-20 rounded-md bg-primary"
            style={{ right: `${maxThumb}%`, left: `${minThumb}%` }}
          ></div>

          <div
            className="-ml-1 absolute left-0 top-0 z-30 -mt-[4px] h-4 w-4 rounded-full bg-primary"
            style={{ left: `${minThumb}%` }}
          ></div>

          <div
            className="-mr-3 absolute right-0 top-0 z-30 -mt-[4px] h-4 w-4 rounded-full bg-primary"
            style={{ right: `${maxThumb}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default DualRangeSlider;

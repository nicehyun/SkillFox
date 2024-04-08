"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface IDualRangeSliderProps {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChange: (range: { min: number; max: number }) => void;
  className?: string;
}

const DualRangeSlider = ({
  max,
  min,
  currentMax,
  currentMin,
  onChange,
  className,
}: IDualRangeSliderProps) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  const minValRef = useRef<number>(0);
  const maxValRef = useRef<number>(0);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <div className={`${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb pointer-events-none absolute z-[3] h-0 w-[200px] appearance-none outline-none"
        style={{ zIndex: minVal > max - 100 ? "5" : "3" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb pointer-events-none absolute z-[4] h-0 w-[200px] appearance-none outline-none"
      />

      <div className="relative w-[200px]">
        <div className="absolute z-[1] h-[5px] w-full rounded-[3px] bg-border" />
        <div
          ref={range}
          className="absolute z-[2] h-[5px] rounded-[3px] bg-orange"
        />
        <div className="absolute left-[-6px] mt-4 text-small font-bold text-black3">
          {minVal}
        </div>
        <div className="absolute right-[-4px] mt-4 text-small font-bold text-black3">
          {maxVal}
        </div>
      </div>
    </div>
  );
};

export default DualRangeSlider;

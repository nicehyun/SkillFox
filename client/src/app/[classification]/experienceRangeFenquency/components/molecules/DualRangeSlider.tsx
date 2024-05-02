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
  // max,
  // min,
  currentMax,
  currentMin,
  onChange,
  className,
}: IDualRangeSliderProps) => {
  const [minPrice, setMinPrice] = useState(0); // 초기 최소 가격을 0으로 설정
  const [maxPrice, setMaxPrice] = useState(30); // 초기 최대 가격을 20으로 설정
  const min = 0; // 최소 범위를 0으로 설정
  const max = 30; // 최대 범위를 20으로 설정
  const [minThumb, setMinThumb] = useState(0);
  const [maxThumb, setMaxThumb] = useState(100);

  useEffect(() => {
    setMinThumb(((minPrice - min) / (max - min)) * 100);
    setMaxThumb(100 - ((maxPrice - min) / (max - min)) * 100);
  }, [minPrice, maxPrice, min, max]);

  const handleMinPriceChange = (event) => {
    const newMinPrice = Math.min(Number(event.target.value), maxPrice - 1); // 최소값과 최대값 사이의 간격을 1로 설정
    setMinPrice(newMinPrice);
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = Math.max(Number(event.target.value), minPrice + 1); // 최소값과 최대값 사이의 간격을 1로 설정
    setMaxPrice(newMaxPrice);
  };

  return (
    <div className="mt-8 flex w-[500px] items-center justify-center">
      <div className="relative w-full max-w-xl">
        <div>
          <input
            type="range"
            step="1"
            min={min}
            max={max}
            value={minPrice}
            onChange={handleMinPriceChange}
            className="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
          />

          <input
            type="range"
            step="1"
            min={min}
            max={max}
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
          />

          <div className="relative z-10 h-2">
            <div className="absolute bottom-0 left-0 right-0 top-0 z-10 rounded-md bg-gray1"></div>
            <div
              className="absolute bottom-0 top-0 z-20 rounded-md bg-primary"
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

        <p className="mt-2">{`🚀 경력 : ${minPrice} ~ ${maxPrice}`}</p>
      </div>
    </div>
  );
};

export default DualRangeSlider;

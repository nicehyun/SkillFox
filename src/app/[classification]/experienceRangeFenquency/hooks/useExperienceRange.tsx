import { useState } from "react";

interface IUseExperienceRangeProps {
  minValue: number;
  maxValue: number;
}

export const useExperienceRange = ({
  maxValue,
  minValue,
}: IUseExperienceRangeProps) => {
  const [experienceCurrentMin, setExperienceCurrentMin] = useState(minValue);
  const [experienceCurrentMax, setExperienceCurrentMax] = useState(maxValue);

  return {
    experienceCurrentMin,
    experienceCurrentMax,
    onChangeExperienceMinValue: (value: number) => {
      setExperienceCurrentMin(value);
    },
    onChangeExperienceMaxValue: (value: number) => {
      setExperienceCurrentMax(value);
    },
  };
};

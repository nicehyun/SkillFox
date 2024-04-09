import { useQuery } from "@tanstack/react-query";
import { ChartData } from "../../../common/types";
import { useGetClassification } from "@/app/common/hooks/useGetClassification";
import { experienceRangeFenquencyAPI } from "../apis/experienceRangeFenquencyAPI";
import { useState } from "react";

type ResponseChartData = {
  data: ChartData[];
  count: number;
};

export type Range = { min: number; max: number };

export const useGetExperienceRangeFrequencyQuery = () => {
  const { classification } = useGetClassification();

  const [experienceMax, setExperienceMax] = useState(20);
  const [experienceMin, setExperienceMin] = useState(0);

  const { data, isLoading } = useQuery<ResponseChartData, Error>(
    ["experienceRangeFrequency", classification, experienceMin, experienceMax],
    async () =>
      await experienceRangeFenquencyAPI.getExperienceRangeFenquencyAnalysis(
        classification,
        experienceMin,
        experienceMax,
      ),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );

  const handleExperienceRangeApplyClick = ({ min, max }: Range) => {
    setExperienceMax(max);
    setExperienceMin(min);
  };

  return {
    data,
    isLoading,
    onClickExperienceRangeApply: handleExperienceRangeApplyClick,
  };
};

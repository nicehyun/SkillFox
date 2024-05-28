import { QueryCache, QueryClient, useQuery } from "@tanstack/react-query";
import { ResponseChartData } from "../../../common/types";
import { useGetClassification } from "@/app/common/hooks/useGetClassification";
import { experienceRangeFenquencyAPI } from "../apis/experienceRangeFenquencyAPI";
import { useState } from "react";

export type Range = { min: number; max: number };

export const useGetExperienceRangeFrequencyQuery = () => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        queryClient.setQueryData<ResponseChartData>(
          [
            "experienceRangeFrequency",
            classification,
            experienceMin,
            experienceMax,
          ],
          {
            labels: [],
            count: 0,
            datasets: [],
          },
        );
      },
    }),
  });

  const { classification } = useGetClassification();

  const [experienceMax, setExperienceMax] = useState(20);
  const [experienceMin, setExperienceMin] = useState(0);

  const { data, isLoading } = useQuery<ResponseChartData, Error>({
    queryKey: [
      "experienceRangeFrequency",
      classification,
      experienceMin,
      experienceMax,
    ],
    queryFn: async () =>
      await experienceRangeFenquencyAPI.getExperienceRangeFenquencyAnalysis(
        classification,
        experienceMin,
        experienceMax,
      ),

    gcTime: 60 * 60 * 1000,
  });

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

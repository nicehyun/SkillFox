import { useQuery } from "@tanstack/react-query";
import { ChartData } from "../../../features/common/types";
import { useGetClassification } from "@/app/features/common/hooks/useGetClassification";
import { experienceRangeFenquencyAPI } from "../apis/experienceRangeFenquencyAPI";

type ResponseChartData = {
  data: ChartData[];
  count: number;
};

export const useGetExperienceRangeFrequencyQuery = () => {
  const { classification } = useGetClassification();

  return useQuery<ResponseChartData, Error>(
    ["experienceRangeFrequency", classification],
    async () =>
      await experienceRangeFenquencyAPI.getExperienceRangeFenquencyAnalysis(
        classification,
      ),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );
};

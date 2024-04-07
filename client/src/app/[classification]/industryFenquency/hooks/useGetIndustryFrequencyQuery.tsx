import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChartData } from "../../../features/common/types";
import { useGetClassification } from "@/app/features/common/hooks/useGetClassification";
import { industryFenquencyAPI } from "../apis/industryFenquencyAPI";

type ResponseChartData = {
  data: ChartData[];
  count: number;
};

export const useGetIndustryFrequencyQuery = () => {
  const queryClient = useQueryClient();

  const { classification } = useGetClassification();

  return useQuery<ResponseChartData, Error>(
    ["industryFrequency", classification],
    async () =>
      await industryFenquencyAPI.getIndustryFenquencyAnalysis(classification),
    {
      onError() {
        queryClient.setQueryData<ResponseChartData>(
          ["industryFrequency", classification],
          {
            data: [],
            count: 0,
          },
        );
      },
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );
};

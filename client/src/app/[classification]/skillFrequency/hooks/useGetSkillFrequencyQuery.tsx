import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ChartData } from "../../../common/types";
import { skillFenquencyAPI } from "../apis/skillFenquencyAPI";
import { useGetClassification } from "../../../common/hooks/useGetClassification";

type ResponseChartData = {
  data: ChartData[];
  count: number;
};

export const useGetSkillFrequencyQuery = () => {
  const queryClient = useQueryClient();

  const { classification } = useGetClassification();

  return useQuery<ResponseChartData, Error>(
    ["skillFrequency", classification],
    async () =>
      await skillFenquencyAPI.getSkillFenquencyAnalysis(classification),

    {
      onError() {
        queryClient.setQueryData<ResponseChartData>(
          ["skillFrequency", classification],
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

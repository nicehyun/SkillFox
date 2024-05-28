import { QueryCache, QueryClient, useQuery } from "@tanstack/react-query";
import { ResponseChartData } from "../../../common/types";
import { skillFenquencyAPI } from "../apis/skillFenquencyAPI";
import { useGetClassification } from "../../../common/hooks/useGetClassification";

export const useGetSkillFrequencyQuery = () => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        queryClient.setQueryData<ResponseChartData>(
          ["skillFrequency", classification],
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

  return useQuery<ResponseChartData, Error>({
    queryKey: ["skillFrequency", classification],
    queryFn: async () =>
      await skillFenquencyAPI.getSkillFenquencyAnalysis(classification),

    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};

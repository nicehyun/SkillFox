import { QueryCache, QueryClient, useQuery } from "@tanstack/react-query";
import { MonthlyChartData } from "../../../common/types";
import { skillFenquencyAPI } from "../apis/skillFenquencyAPI";
import { useGetClassification } from "../../../common/hooks/useGetClassification";

type ResponseChartData = {
  data: MonthlyChartData[];
  count: number;
};

export const useGetSkillFrequencyQuery = () => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        queryClient.setQueryData<ResponseChartData>(
          ["skillFrequency", classification],
          {
            data: [],
            count: 0,
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

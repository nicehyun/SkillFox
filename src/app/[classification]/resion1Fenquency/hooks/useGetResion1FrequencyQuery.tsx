import { QueryCache, QueryClient, useQuery } from "@tanstack/react-query";

import { useGetClassification } from "@/app/common/hooks/useGetClassification";
import { resionFenquencyAPI } from "../apis/resionFenquencyAPI";
import {
  RegionBarChartData,
  ResponseSeveralChartData,
} from "@/app/common/types";

export const useGetResion1FrequencyQuery = () => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        queryClient.setQueryData<ResponseSeveralChartData<RegionBarChartData>>(
          ["regionFrequency", classification],
          {
            count: 0,
            chartData: [],
          },
        );
      },
    }),
  });

  const { classification } = useGetClassification();
  return useQuery<ResponseSeveralChartData<RegionBarChartData>, Error>({
    queryKey: ["regionFrequency", classification],
    queryFn: async () =>
      await resionFenquencyAPI.getResion1FenquencyAnalysis(classification),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};

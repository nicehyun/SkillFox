import { QueryCache, QueryClient, useQuery } from "@tanstack/react-query";
import {
  EducationBarChartData,
  EducationChartData,
  ResponseSeveralChartData,
} from "../../../common/types";
import { useGetClassification } from "@/app/common/hooks/useGetClassification";
import { educationFenquencyAPI } from "../apis/educationFenquencyAPI";

export type EducationResponseChartData = {
  data: EducationChartData[];
  count: number;
};

export const useGetEducationFrequencyQuery = () => {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        queryClient.setQueryData<
          ResponseSeveralChartData<EducationBarChartData>
        >(["regionFrequency", classification], {
          count: 0,
          chartData: [],
        });
      },
    }),
  });

  const { classification } = useGetClassification();
  return useQuery<ResponseSeveralChartData<EducationBarChartData>, Error>({
    queryKey: ["educationFrequency", classification],
    queryFn: async () =>
      await educationFenquencyAPI.getEducationFenquencyAnalysis(classification),
    gcTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

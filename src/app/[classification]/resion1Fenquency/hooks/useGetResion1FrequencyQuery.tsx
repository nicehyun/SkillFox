import { useQuery } from "@tanstack/react-query";
import { RegionChartData } from "../../../common/types";
import { useGetClassification } from "@/app/common/hooks/useGetClassification";
import { resionFenquencyAPI } from "../apis/resionFenquencyAPI";

export type ResponseChartData = {
  data: RegionChartData[];
  count: number;
};

export const useGetResion1FrequencyQuery = () => {
  const { classification } = useGetClassification();
  return useQuery<ResponseChartData, Error>({
    queryKey: ["regionFrequency", classification],
    queryFn: async () =>
      await resionFenquencyAPI.getResion1FenquencyAnalysis(classification),
    staleTime: 60 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
};

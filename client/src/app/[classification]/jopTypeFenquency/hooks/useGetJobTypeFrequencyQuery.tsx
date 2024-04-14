import { useQuery } from "@tanstack/react-query";
import { RegionChartData } from "../../../common/types";
import { useGetClassification } from "@/app/common/hooks/useGetClassification";
import { jopTypeFenquencyAPI } from "../apis/jopTypeFenquencyAPI";

export type ResponseChartData = {
  data: RegionChartData[];
  count: number;
};

export const useGetJobTypeFrequencyQuery = () => {
  const { classification } = useGetClassification();
  return useQuery<ResponseChartData, Error>(
    ["regionFrequency", classification],
    async () =>
      await jopTypeFenquencyAPI.getJopTypeFenquencyAnalysis(classification),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );
};

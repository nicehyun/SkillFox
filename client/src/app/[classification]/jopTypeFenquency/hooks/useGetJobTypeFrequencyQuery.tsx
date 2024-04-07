import { useQuery } from "@tanstack/react-query";
import { ChartData } from "../../../features/common/types";
import { useGetClassification } from "@/app/features/common/hooks/useGetClassification";
import { jopTypeFenquencyAPI } from "../apis/jopTypeFenquencyAPI";

export type JobTypeData = { [key: string]: ChartData[] };

export type ResponseChartData = {
  data: JobTypeData;
  count: number;
};

export const useGetJobTypeFrequencyQuery = () => {
  const { classification } = useGetClassification();
  return useQuery<ResponseChartData, Error>(
    ["jobTypeFrequency", classification],
    async () =>
      await jopTypeFenquencyAPI.getJopTypeFenquencyAnalysis(classification),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );
};

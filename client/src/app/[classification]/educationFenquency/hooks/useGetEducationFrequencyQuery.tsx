import { useQuery } from "@tanstack/react-query";
import { ChartData } from "../../../features/common/types";
import { useGetClassification } from "@/app/features/common/hooks/useGetClassification";
import { educationFenquencyAPI } from "../apis/educationFenquencyAPI";

type ResponseChartData = {
  data: ChartData[];
  count: number;
};

export const useGetEducationFrequencyQuery = () => {
  const { classification } = useGetClassification();
  return useQuery<ResponseChartData, Error>(
    ["educationFrequency", classification],
    async () =>
      await educationFenquencyAPI.getEducationFenquencyAnalysis(classification),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );
};

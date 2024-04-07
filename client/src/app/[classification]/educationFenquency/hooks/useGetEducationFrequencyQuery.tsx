import { useQuery } from "@tanstack/react-query";
import { ObjectChartData } from "../../../features/common/types";
import { useGetClassification } from "@/app/features/common/hooks/useGetClassification";
import { educationFenquencyAPI } from "../apis/educationFenquencyAPI";

export type EducationResponseChartData = {
  data: ObjectChartData;
  count: number;
};

export const useGetEducationFrequencyQuery = () => {
  const { classification } = useGetClassification();
  return useQuery<EducationResponseChartData, Error>(
    ["educationFrequency", classification],
    async () =>
      await educationFenquencyAPI.getEducationFenquencyAnalysis(classification),
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );
};

import { useQuery } from "@tanstack/react-query";
import { EducationChartData } from "../../../common/types";
import { useGetClassification } from "@/app/common/hooks/useGetClassification";
import { educationFenquencyAPI } from "../apis/educationFenquencyAPI";

export type EducationResponseChartData = {
  data: EducationChartData[];
  count: number;
};

export const useGetEducationFrequencyQuery = () => {
  const { classification } = useGetClassification();
  return useQuery<EducationResponseChartData, Error>({
    queryKey: ["educationFrequency", classification],
    queryFn: async () =>
      await educationFenquencyAPI.getEducationFenquencyAnalysis(classification),
    gcTime: 60 * 60 * 1000,
    staleTime: 60 * 60 * 1000,
  });
};

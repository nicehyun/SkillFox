import { useQuery } from "@tanstack/react-query";
import { ChartData } from "../../common/types";

export const useGetSkillFrequencyQuery = () => {
  return useQuery<ChartData[]>(
    ["getSkillFrequency"],
    async () => {
      const response = await fetch(`/api/skillFrequency`, {
        next: { revalidate: 0 },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    },
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );
};

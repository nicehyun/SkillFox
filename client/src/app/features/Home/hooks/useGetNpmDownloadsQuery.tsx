import { useQuery } from "@tanstack/react-query";
import { LineChartData } from "../../common/types";
import { useAppSelector } from "@/redux/hooks";
import { selectNpmSkillState } from "@/redux/features/homeSlice";

export const useGetNpmDownloadsQuery = () => {
  const skill = useAppSelector(selectNpmSkillState);

  return useQuery<LineChartData[]>(
    ["npm-download", skill],
    async () => {
      const response = await fetch(`/api/npm/${skill}`, {
        next: { revalidate: 0 },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.json();
    },
    {
      enabled: !!skill,
      staleTime: Infinity,
      cacheTime: Infinity,
      onError() {
        // TODO : 에러처리
        console.log("error!");
      },
    },
  );
};

import { useQuery } from "@tanstack/react-query";
import { ChartData } from "../../common/types";

type ResponseChartData = {
  data: ChartData[];
  count: number;
};

export const useGetRegionFrequencyQuery = () => {
  return useQuery<ResponseChartData, Error>(
    ["regionFrequency"],
    async () => {
      const response = await fetch(`/api/regionFrequency`, {
        next: { revalidate: 0 },
      });

      if (!response.ok) {
        // 에러 객체 생성 후 throw
        throw new Error("데이터를 가져오기를 실패했습니다.");
      }

      return await response.json();
    },
    {
      staleTime: 60 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    },
  );
};

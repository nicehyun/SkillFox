import {
  RegionBarChartData,
  ResponseSeveralChartData,
} from "@/app/common/types";

export const resionFenquencyAPI = {
  getResion1FenquencyAnalysis: async (
    classification: string,
  ): Promise<ResponseSeveralChartData<RegionBarChartData>> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${classification}/resion1Frequency`,
        {
          next: { revalidate: 0 },
        },
      );

      if (!response.ok) {
        throw new Error("데이터를 가져오기를 실패했습니다.");
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

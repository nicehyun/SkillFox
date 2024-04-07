export const industryFenquencyAPI = {
  getIndustryFenquencyAnalysis: async (classification: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${classification}/industryFrequency`,
        {
          next: { revalidate: 0 },
        },
      );

      if (!response.ok) {
        throw new Error("데이터를 가져오기를 실패했습니다.");
      }

      return await response.json();
    } catch (error) {
      return {
        data: [],
        count: 0,
      };
    }
  },
};

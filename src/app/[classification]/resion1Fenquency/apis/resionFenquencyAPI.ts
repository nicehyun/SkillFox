export const resionFenquencyAPI = {
  getResion1FenquencyAnalysis: async (classification: string) => {
    try {
      const response = await fetch(`/api/${classification}/resion1Frequency`, {
        next: { revalidate: 0 },
      });

      if (!response.ok) {
        throw new Error("데이터를 가져오기를 실패했습니다.");
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

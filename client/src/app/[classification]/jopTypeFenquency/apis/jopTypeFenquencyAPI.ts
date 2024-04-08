export const jopTypeFenquencyAPI = {
  getJopTypeFenquencyAnalysis: async (classification: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${classification}/jobTypeFrequency`,
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
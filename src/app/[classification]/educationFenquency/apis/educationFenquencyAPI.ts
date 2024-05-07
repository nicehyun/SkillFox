export const educationFenquencyAPI = {
  getEducationFenquencyAnalysis: async (classification: string) => {
    try {
      const response = await fetch(
        `/api/${classification}/educationFrequency`,
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

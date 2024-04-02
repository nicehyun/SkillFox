import { FormattedData, LineChartData } from "../types";

// 데이터의 모든 linesData 값 중에서 최대 값을 찾습니다.
export const getMaxValueFromChartData = (chartData: LineChartData[]) => {
  return Math.max(
    ...chartData.flatMap((data) => data.linesData.map((line) => line.value)),
  );
};

// 가공된 차트 데이터 생성
export const formatChartData = (
  chartData: LineChartData[],
): FormattedData[] => {
  return chartData.map((data) => {
    const formattedData: FormattedData = {
      xAxisLabel: data.xAxisLabel,
    };

    data.linesData.forEach((line) => {
      formattedData[line.name] = line.value;
    });
    return formattedData;
  });
};

// 모든 라인 이름을 추출하여 중복을 제거
export const extractUniqueLineNames = (
  chartData: LineChartData[],
): string[] => {
  return Array.from(
    new Set(
      chartData.flatMap((data) => data.linesData.map((line) => line.name)),
    ),
  );
};

export const chartColor = [
  "#ff6384",
  "#36a2eb",
  "#ffcd56",
  "#4bc0c0",
  "#9966ff",
  "#008000",
  "#ff7f0e",
  "#1f77b4",
  "#e377c2",
  "#7f7f7f",
];

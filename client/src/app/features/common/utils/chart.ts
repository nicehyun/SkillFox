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
  "#f77189",
  "#f7754f",
  "#dc8932",
  "#c39532",
  "#ae9d31",
  "#97a431",
  "#77ab31",
  "#31b33e",
  "#33b07a",
  "#35ae93",
  "#36ada4",
  "#37abb4",
  "#38a9c5",
  "#3aa5df",
  "#6e9bf4",
  "#a48cf4",
  "#cc7af4",
  "#f45cf2",
  "#f565cc",
  "#f66bad",
];

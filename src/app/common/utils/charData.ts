import { MonthlyChartData } from "../types";

export type SeriesItem = {
  name: string;
  group: "budget" | "actual";
  data: number[];
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

export const extractMonthArray = (
  monthlyChatdatas: MonthlyChartData[] | undefined,
): string[] => {
  if (
    !monthlyChatdatas ||
    monthlyChatdatas.length === 0 ||
    !monthlyChatdatas[0].months_value
  ) {
    return [];
  }

  return monthlyChatdatas[0].months_value.map(
    (months_value) => Object.keys(months_value)[0],
  );
};

// export const extractMonthlyChartData = (
//   data: MonthlyChartData[],
// ): SeriesItem[] => {
//   const result: SeriesItem[] = [];

//   // 각 월별 데이터를 처리
//   data.forEach((item) => {
//     const monthsValue = item.months_value;

//     monthsValue.forEach((monthData, index) => {
//       // 결과 배열에 해당 인덱스에 값을 추가
//       if (!result[index]) {
//         // 해당 인덱스에 값이 없으면 새로운 객체로 초기화
//         const groupName = index === 0 ? "actual" : "budget";
//         const monthName = extractMonthArray(data)
//           ? `${extractMonthArray(data)[index]}월`
//           : "";
//         result[index] = { name: monthName, group: groupName, data: [] };
//       }

//       // 해당 인덱스의 데이터에 값을 추가
//       result[index].data.push(Object.values(monthData)[0]);
//     });
//   });

//   return result.reverse();
// };

export const extractMonthlyChartData = (
  data: MonthlyChartData[],
): {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor: string }[];
} => {
  const result: {
    labels: string[];
    datasets: { label: string; data: number[]; backgroundColor: string }[];
  } = {
    labels: extractMonthArray(data),
    datasets: [],
  };

  // 각 그룹별 데이터를 처리
  const budgetData: number[] = [];
  const actualData: number[] = [];

  data.forEach((item) => {
    const monthsValue = item.months_value;

    monthsValue.forEach((monthData, index) => {
      if (index === 0) {
        actualData.push(Object.values(monthData)[0]);
      } else {
        budgetData.push(Object.values(monthData)[0]);
      }
    });
  });

  result.datasets.push({
    label: "Budget",
    data: budgetData,
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  });

  result.datasets.push({
    label: "Actual",
    data: actualData,
    backgroundColor: "rgba(54, 162, 235, 0.5)",
  });

  return result;
};

export const extractAllNamesFromChartData = <
  T extends { data: MonthlyChartData[] },
>(
  chartData: T[],
): string[] => {
  const allSkillName = chartData.flatMap((dataEl) =>
    dataEl.data.map((monthlyData) => monthlyData.name),
  );

  const uniqueAllSkillName = Array.from(new Set(allSkillName));

  return uniqueAllSkillName;
};

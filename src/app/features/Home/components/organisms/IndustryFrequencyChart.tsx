"use client";

import AnalysisResultLayout from "./AnalysisChartLayout";
import CustomLineChart from "@/app/features/common/components/organisms/CustomLineChart";

const lineChartData = [
  {
    xAxisLabel: "산업 1",
    linesData: [
      { name: "React", value: 1000 },
      { name: "Vue", value: 1398 },
      { name: "Angular", value: 2210 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1200 },
    ],
  },
  {
    xAxisLabel: "산업 2",
    linesData: [
      { name: "React", value: 2000 },
      { name: "Vue", value: 1598 },
      { name: "Angular", value: 810 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1000 },
    ],
  },

  {
    xAxisLabel: "산업 3",
    linesData: [
      { name: "React", value: 3000 },
      { name: "Vue", value: 1198 },
      { name: "Angular", value: 2510 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1400 },
    ],
  },

  {
    xAxisLabel: "산업 4",
    linesData: [
      { name: "React", value: 4000 },
      { name: "Vue", value: 998 },
      { name: "Angular", value: 1210 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1090 },
    ],
  },

  {
    xAxisLabel: "산업 5",
    linesData: [
      { name: "React", value: 5000 },
      { name: "Vue", value: 1098 },
      { name: "Angular", value: 3210 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1800 },
    ],
  },
];

const IndustryFrequencyChart = () => {
  return (
    <AnalysisResultLayout
      title="기술별 빈도 분석 결과의 상위 5개 기술의 산업별 빈도를 분석한 결과에요! (공통 산업 5개)"
      className="h-[400px] sm:h-[450px]"
    >
      <CustomLineChart id="industry" chartData={lineChartData} />
    </AnalysisResultLayout>
  );
};

export default IndustryFrequencyChart;

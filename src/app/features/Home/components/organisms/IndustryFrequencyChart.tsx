"use client";

import AnalysisResultLayout from "./AnalysisChartLayout";
import CustomLineChart from "@/app/features/common/components/organisms/CustomLineChart";

const data = [
  {
    name: "Industry A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Industry B",
    uv: 3000,
    pv: 1808,
    amt: 2210,
  },
  {
    name: "Industry C",
    uv: 2000,
    pv: 19800,
    amt: 2290,
  },
  {
    name: "Industry D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Industry E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const IndustryFrequencyChart = () => {
  return (
    <AnalysisResultLayout title="기술별 빈도가 높은 기술의 산업별 빈도를 분석한 결과입니다. (상위 5개)">
      <CustomLineChart id="industry" chartData={data} />
    </AnalysisResultLayout>
  );
};

export default IndustryFrequencyChart;

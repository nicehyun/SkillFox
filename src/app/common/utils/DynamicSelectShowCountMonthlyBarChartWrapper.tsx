import React from "react";
import ChartWrapper from "./ChartWrapper";
import { BarChartData } from "../types";
import DynamicSelectShowCountMonthlyBarChart from "./DynamicSelectShowCountMonthlyBarChart";
import { ChartDataset } from "chart.js";

interface IDynamicSelectShowCountMonthlyBarChartWrapperProps {
  id: string;
  chartData: BarChartData | undefined;
}

const DynamicSelectShowCountMonthlyBarChartWrapper = ({
  chartData,
  id,
}: IDynamicSelectShowCountMonthlyBarChartWrapperProps) => {
  return (
    <ChartWrapper<Array<ChartDataset<"bar", number[]>>>
      chartData={chartData?.datasets ?? []}
    >
      <DynamicSelectShowCountMonthlyBarChart
        id={id}
        chartData={{
          datasets: chartData?.datasets ?? [],
          labels: chartData?.labels,
        }}
      />
    </ChartWrapper>
  );
};

export default DynamicSelectShowCountMonthlyBarChartWrapper;

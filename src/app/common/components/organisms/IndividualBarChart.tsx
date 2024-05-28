"use client";

import { ExcludeBarChartData } from "@/app/common/types";
import IndividualBarChartTitle from "../atoms/IndividualBarChartTitle";
import DynamicSelectShowCountMonthlyBarChartWrapper from "../../utils/DynamicSelectShowCountMonthlyBarChartWrapper";

export interface IIndividualBarChartProps {
  id: string;
  chartTitle: string;
  className?: string;
  chartData: ExcludeBarChartData;
}

const IndividualBarChart = ({
  id,
  chartData,
  chartTitle,
  className,
}: IIndividualBarChartProps) => {
  console.log(chartData);

  return (
    <article className={className}>
      <IndividualBarChartTitle title={chartTitle} />

      <DynamicSelectShowCountMonthlyBarChartWrapper
        id={id}
        chartData={chartData}
      />
    </article>
  );
};

export default IndividualBarChart;

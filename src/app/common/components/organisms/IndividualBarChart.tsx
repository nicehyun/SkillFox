"use client";

import { IndividualBarChartData } from "@/app/common/types";
import IndividualBarChartTitle from "../atoms/IndividualBarChartTitle";
import DynamicSelectShowCountMonthlyBarChartWrapper from "../../utils/DynamicSelectShowCountMonthlyBarChartWrapper";

export interface IIndividualBarChartProps {
  id: string;
  chartTitle: string;
  className?: string;
  chartData: IndividualBarChartData;
}

const IndividualBarChart = ({
  id,
  chartData,
  chartTitle,
  className,
}: IIndividualBarChartProps) => {
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

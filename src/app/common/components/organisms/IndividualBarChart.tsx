"use client";

import { IMonthlyBarChartProps } from "@/app/common/types";
import DynamicSelectShowCountMonthlyBarChart from "../../utils/DynamicSelectShowCountMonthlyBarChart";
import IndividualBarChartTitle from "../atoms/IndividualBarChartTitle";

export interface IIndividualBarChartProps extends IMonthlyBarChartProps {
  id: string;
  chartTitle: string;
  className?: string;
}

const IndividualBarChart = ({
  id,
  chartData,
  chartTitle,
  className,
  count,
}: IIndividualBarChartProps) => {
  return (
    <article className={className}>
      <IndividualBarChartTitle title={chartTitle} />

      <DynamicSelectShowCountMonthlyBarChart
        id={id}
        chartData={chartData}
        count={count}
      />
    </article>
  );
};

export default IndividualBarChart;

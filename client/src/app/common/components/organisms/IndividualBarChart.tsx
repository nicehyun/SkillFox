"use client";

import { IMonthlyBarChartProps } from "@/app/common/types";
import SelectShowCountMonthlyBarChart from "@/app/common/components/organisms/SelectShowCountMonthlyBarChart";

interface IIndividualBarChartProps extends IMonthlyBarChartProps {
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
      <div className="mb-2 flex items-center">
        <h3 className="mr-2 text-small font-bold text-black1">{chartTitle}</h3>
      </div>

      <SelectShowCountMonthlyBarChart
        id={id}
        chartData={chartData}
        count={count}
      />
    </article>
  );
};

export default IndividualBarChart;

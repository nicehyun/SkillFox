"use client";

import { IChartProps } from "@/app/common/types";
import CustomBarChart from "@/app/common/components/organisms/CustomBarChart";
import ChartLayout from "@/app/common/components/atoms/ChartLayout";
import DownloadPDFButton from "@/app/common/components/atoms/DownloadPDFButton";

interface IIndustryAnalysisChartProps extends IChartProps {}

const IndustryAnalysisChart = ({
  chartData,
  count,
}: IIndustryAnalysisChartProps) => {
  return (
    <ChartLayout className="h-[600px]">
      <div className="mb-2 flex justify-end px-4">
        <span>
          <DownloadPDFButton id="chart-bar-industry-Frenquency" />
        </span>
      </div>
      <CustomBarChart
        id="industry-Frenquency"
        emphasisCount={3}
        chartData={chartData}
        count={count}
        yAxisTickType="count"
      />
    </ChartLayout>
  );
};

export default IndustryAnalysisChart;

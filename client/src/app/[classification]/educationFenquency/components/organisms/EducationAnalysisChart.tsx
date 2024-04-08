"use client";

import { ChartData } from "@/app/features/common/types";
import ChartLayout from "@/app/features/common/components/atoms/ChartLayout";
import DownloadPDFButton from "@/app/features/common/components/atoms/DownloadPDFButton";
import CustomPieChart from "@/app/features/common/components/organisms/CustomPieChart";

interface IEducationAnalysisChartProps {
  id: string;
  chartData: ChartData[];
  chartTitle: string;
  className?: string;
}

const EducationAnalysisChart = ({
  id,
  chartData,
  chartTitle,
  className,
}: IEducationAnalysisChartProps) => {
  return (
    <article className={className}>
      <div className="mb-2 flex items-center">
        <h3 className="mr-2 text-small text-gray1">{chartTitle}</h3>
      </div>

      <ChartLayout className="h-[400px] pl-6">
        <div className="mb-2 flex justify-end px-4">
          <span>
            <DownloadPDFButton id={`chart-pie-${id}`} />
          </span>
        </div>

        <CustomPieChart id={id} chartData={chartData} />
      </ChartLayout>
    </article>
  );
};

export default EducationAnalysisChart;

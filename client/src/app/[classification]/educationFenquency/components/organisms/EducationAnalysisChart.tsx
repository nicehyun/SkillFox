"use client";

import { ChartData } from "@/app/features/common/types";
import ChartLayout from "@/app/features/common/components/atoms/ChartLayout";
import DownloadPDFButton from "@/app/features/common/components/atoms/DownloadPDFButton";
import CustomPieChart from "@/app/features/common/components/organisms/CustomPieChart";
import ToolTip from "@/app/features/common/components/molecules/ToolTip";
import { ReactNode } from "react";

interface IEducationAnalysisChartProps {
  id: string;
  chartData: ChartData[];
  chartTitle: string;
  titleGuideContent: ReactNode;
}

const EducationAnalysisChart = ({
  id,
  chartData,
  chartTitle,
  titleGuideContent,
}: IEducationAnalysisChartProps) => {
  return (
    <>
      <div className="mb-2 flex items-center">
        <h3 className="mr-2 text-small text-gray1">{chartTitle}</h3>
        <ToolTip
          title={chartTitle}
          guideContent={titleGuideContent}
          ariaLabel={`${chartTitle} 툴팁`}
        />
      </div>

      <ChartLayout className="h-[400px] pl-6">
        <div className="mb-2 flex justify-end px-4">
          <span>
            <DownloadPDFButton id={`chart-pie-${id}`} />
          </span>
        </div>

        <CustomPieChart id={id} chartData={chartData} />
      </ChartLayout>
    </>
  );
};

export default EducationAnalysisChart;

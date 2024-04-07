"use client";

import ChartLayout from "@/app/features/common/components/atoms/ChartLayout";
import DownloadPDFButton from "@/app/features/common/components/atoms/DownloadPDFButton";
import CustomRadarChart from "@/app/features/common/components/organisms/CustomRadarChart";
import { ObjectChartData } from "@/app/features/common/types";

interface IJopTypeAnalysisChartProps {
  chartData: ObjectChartData;
}

const JopTypeAnalysisChart = ({ chartData }: IJopTypeAnalysisChartProps) => {
  return (
    <ChartLayout className="h-auto">
      <div className="mb-2 flex justify-end px-4">
        <span>
          <DownloadPDFButton id="chart-radar-jop-type-Frenquency" />
        </span>
      </div>

      <div
        id="chart-radar-jop-type-Frenquency"
        className={`grid grid-cols-2 gap-[20px] sm:grid-cols-1 md:grid-cols-1`}
      >
        {chartData &&
          Object.entries(chartData)
            .filter(([, data]) => data.length > 0)
            .map(([jobType, data], index) => (
              <div key={index}>
                <CustomRadarChart
                  id={`jop-type-Frenquency__${index}`}
                  chartData={data}
                  radarName={jobType}
                />
              </div>
            ))}
      </div>
    </ChartLayout>
  );
};

export default JopTypeAnalysisChart;

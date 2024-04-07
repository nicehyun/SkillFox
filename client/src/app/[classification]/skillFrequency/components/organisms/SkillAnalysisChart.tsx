"use client";

import CustomBarChart from "@/app/features/common/components/organisms/CustomBarChart";
import { IChartProps } from "@/app/features/common/types";
import ShowChartCountSelect from "./ShowChartCountSelect";
import { selectShowChartCountState } from "@/redux/features/skillFrequencySlice";
import { useAppSelector } from "@/redux/hooks";
import DownloadPDFButton from "@/app/features/common/components/atoms/DownloadPDFButton";
import ChartLayout from "@/app/features/common/components/atoms/ChartLayout";

interface ISkillAnalysisChartProps extends IChartProps {}

const SkillAnalysisChart = ({ chartData, count }: ISkillAnalysisChartProps) => {
  const showChartCount = useAppSelector(selectShowChartCountState);

  const handleBarChartHeightControl = (showCount: number) => {
    switch (showCount) {
      case 10:
        return "h-[600px]";

      case 20:
        return "h-[1000px]";

      case 30:
        return "h-[1400px]";

      case 40:
        return "h-[1800px]";

      case 50:
        return "h-[2200px]";
      default:
        break;
    }
  };

  handleBarChartHeightControl(showChartCount);

  return (
    <>
      <div className="flex justify-end">
        <ShowChartCountSelect />
      </div>

      <ChartLayout className={handleBarChartHeightControl(showChartCount)}>
        <div className="mb-2 flex justify-end px-4">
          <span>
            <DownloadPDFButton id="chart-bar-skill-Frenquency" />
          </span>
        </div>
        {chartData && (
          <CustomBarChart
            id="skill-Frenquency"
            emphasisCount={10}
            chartData={chartData.slice(0, showChartCount)}
            count={count}
          />
        )}
      </ChartLayout>
    </>
  );
};

export default SkillAnalysisChart;

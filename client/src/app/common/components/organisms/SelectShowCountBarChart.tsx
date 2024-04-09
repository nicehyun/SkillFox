"use client";

import { useAppSelector } from "@/redux/hooks";
import { IChartProps } from "../../types";
import { selectShowBarChartCountState } from "@/redux/features/showChartCountSlice";
import ShowChartCountSelect from "@/app/[classification]/skillFrequency/components/organisms/ShowChartCountSelect";
import DownloadPDFButton from "../atoms/DownloadPDFButton";
import CustomBarChart, { YAxisTickType } from "./CustomBarChart";
import ChartLayout from "../atoms/ChartLayout";

interface ISelectShowCountBarChartProps extends IChartProps {
  id: string;
  emphasisCount: number;
  yAxisTickType?: YAxisTickType;
}

const SelectShowCountBarChart = ({
  id,
  chartData,
  count,
  emphasisCount,
  yAxisTickType = "ratio",
}: ISelectShowCountBarChartProps) => {
  const showBarChartCount = useAppSelector(selectShowBarChartCountState);

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

  return (
    <>
      <div className="flex justify-end">
        <ShowChartCountSelect />
      </div>

      <ChartLayout className={handleBarChartHeightControl(showBarChartCount)}>
        <div className="mb-2 flex justify-end px-4">
          <span>
            <DownloadPDFButton id={`chart-bar-${id}`} />
          </span>
        </div>
        {chartData && (
          <CustomBarChart
            id={id}
            yAxisTickType={yAxisTickType}
            emphasisCount={emphasisCount}
            chartData={chartData.slice(0, showBarChartCount)}
            count={count}
          />
        )}
      </ChartLayout>
    </>
  );
};

export default SelectShowCountBarChart;

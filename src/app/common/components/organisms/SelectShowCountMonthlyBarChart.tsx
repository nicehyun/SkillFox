"use client";

import { useAppSelector } from "@/redux/hooks";
import { BarChartData } from "../../types";
import ShowChartCountSelect from "@/app/common/components/organisms/ShowChartCountSelect";
import ChartLayout from "../atoms/ChartLayout";
import { showBarChartCountState } from "@/redux/features/showChartCountSlice";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

export interface ISelectShowCountBarChartProps {
  id: string;
  chartData: BarChartData;
}

const SelectShowCountMonthlyBarChart = ({
  id,
  chartData,
}: ISelectShowCountBarChartProps) => {
  const showBarChartCount = useAppSelector(showBarChartCountState);

  const handleBarChartHeightControl = (showCount: number) => {
    switch (showCount) {
      case 10:
        return "h-[700px]";

      case 20:
        return "h-[1400px]";

      case 30:
        return "h-[2100px]";

      case 40:
        return "h-[2800px]";

      case 50:
        return "h-[3500px]";

      default:
        return "h-[700px]";
    }
  };

  const options = {
    indexAxis: "y" as const, // This makes the chart horizontal
    plugins: {
      title: {
        display: true,
        text: "월별 기술 빈도 분석",
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
      legend: {
        display: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        stacked: true,
      },
    },
    maintainAspectRatio: false, // Disable the default aspect ratio
  };

  const slicedLabels = chartData.labels?.slice(0, showBarChartCount);

  return (
    <>
      <div className="flex justify-end">
        <ShowChartCountSelect id={id} />
      </div>

      <ChartLayout
        className={`${handleBarChartHeightControl(showBarChartCount)} `}
      >
        <Bar
          className={`w-full`}
          options={options}
          data={{
            ...chartData,
            labels: slicedLabels,
          }}
        />
      </ChartLayout>
    </>
  );
};

export default SelectShowCountMonthlyBarChart;

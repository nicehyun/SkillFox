"use client";

import { useAppSelector } from "@/redux/hooks";
import { IMonthlyBarChartProps } from "../../types";
import { selectShowBarChartCountState } from "@/redux/features/showChartCountSlice";
import ShowChartCountSelect from "@/app/[classification]/skillFrequency/components/organisms/ShowChartCountSelect";
import { YAxisTickType } from "./CustomBarChart";
import ChartLayout from "../atoms/ChartLayout";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { extractMonthlyChartData } from "../../utils/charData";

interface ISelectShowCountBarChartProps extends IMonthlyBarChartProps {
  id: string;
}

const SelectShowCountMonthlyBarChart = ({
  id,
  chartData,
}: ISelectShowCountBarChartProps) => {
  const showBarChartCount = useAppSelector(selectShowBarChartCountState);

  const handleBarChartHeightControl = (showCount: number) => {
    switch (showCount) {
      case 10:
        return 700;

      case 20:
        return 1400;

      case 30:
        return 2100;

      case 40:
        return 2800;

      case 50:
        return 3500;
      default:
        break;
    }
  };

  const options: ApexOptions = {
    chart: {
      // 차트 유형
      type: "bar",
      // 차트의 맏대를 쌓아 올릴지 여부
      stacked: true,
    },
    colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#F46036"],
    stroke: {
      // 차트 경계선 너비
      width: 1,
      // 차트 경계선 색상
      colors: ["#fff"],
    },

    plotOptions: {
      bar: {
        // 가로, 세로
        horizontal: true,
      },
    },
    xaxis: {
      // x 축에 표시할 카테고리를 배열로 지정
      categories: chartData
        .slice(0, showBarChartCount)
        .map((skills) => skills.name),
      // x축의 레이블 형식을 지정하는 함수
    },
    fill: {
      // 차트 투명도
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
    noData: {
      text: "Loading...",
    },
  };

  const monthlyValues = extractMonthlyChartData(
    chartData.slice(0, showBarChartCount) ?? [],
  );

  console.log(monthlyValues);

  return (
    <>
      <div className="flex justify-end">
        <ShowChartCountSelect />
      </div>

      <ChartLayout>
        <ReactApexChart
          id={id}
          options={options}
          series={monthlyValues}
          type="bar"
          height={handleBarChartHeightControl(showBarChartCount)}
        />
      </ChartLayout>
    </>
  );
};

export default SelectShowCountMonthlyBarChart;

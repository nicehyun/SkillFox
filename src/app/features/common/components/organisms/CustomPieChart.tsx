"use client";

import ActiveShape from "@/app/features/common/components/atoms/ActiveShape";
import { useCallback, useState } from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { IColorProps } from "../../types";

interface ICustomPieChartProps extends IColorProps {
  id: string;
  chartData: { name: string; value: number }[];
}

const CustomPieChart = ({
  color = "primary",
  id,
  chartData,
}: ICustomPieChartProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (_: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );

  const chartColor = color === "primary" ? "#F2994A" : "#092C4C";

  return (
    <ResponsiveContainer height="100%">
      <PieChart id={`chart-pie-${id}`}>
        <Pie
          activeIndex={activeIndex}
          activeShape={(props) => ActiveShape({ props, color })}
          data={chartData}
          cx="50%"
          cy="40%"
          innerRadius={60}
          outerRadius={80}
          fill={chartColor}
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;

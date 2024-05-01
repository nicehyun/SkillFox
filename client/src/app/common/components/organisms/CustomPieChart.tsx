"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartData } from "../../types";
import { chartColor } from "../../utils/charData";

interface ICustomPieChartProps {
  id: string;
  chartData: ChartData[];
}

const CustomPieChart = ({ id, chartData }: ICustomPieChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%" id={`chart-pie-${id}`}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={chartData}
          cx="40%"
          cy="40%"
          outerRadius={60}
          fill="#8884d8"
          label
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`chart-pie-${id}-cell__${index}`}
              fill={chartColor[index % chartColor.length]}
            />
          ))}
        </Pie>

        <Legend align="left" verticalAlign="top" layout="vertical" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;

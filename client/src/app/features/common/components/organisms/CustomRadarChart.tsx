"use client";

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { ChartData, IColorProps } from "../../types";

interface ICustomRadarChartProps extends IColorProps {
  id: string;
  chartData: ChartData[];
  skill: string;
  fillColor: string;
}

const CustomRadarChart = ({
  id,
  chartData,
  skill,
  fillColor,
}: ICustomRadarChartProps) => {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <RadarChart id={`chart-radar-${id}`} outerRadius={60} data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" tick={{ fontSize: "12px" }} />
        <PolarRadiusAxis angle={18} domain={[0, 150]} />
        <Radar
          name={skill}
          dataKey="value"
          stroke={fillColor}
          fill={fillColor}
          fillOpacity={0.6}
        />
        <Tooltip />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CustomRadarChart;

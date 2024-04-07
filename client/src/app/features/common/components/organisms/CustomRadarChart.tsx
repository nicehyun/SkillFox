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
import { ChartData } from "../../types";

interface ICustomRadarChartProps {
  id: string;
  chartData: ChartData[];
  radarName: string;
}

const CustomRadarChart = ({
  id,
  chartData,
  radarName,
}: ICustomRadarChartProps) => {
  return (
    <ResponsiveContainer height={300} id={`chart-radar-${id}`}>
      <RadarChart outerRadius={60} data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" tick={{ fontSize: "12px" }} />
        <PolarRadiusAxis angle={18} domain={[0, "auto"]} />
        <Radar
          name={radarName}
          dataKey="value"
          stroke="#F2994A"
          fill="#F2994A"
          fillOpacity={0.6}
        />
        <Tooltip />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CustomRadarChart;

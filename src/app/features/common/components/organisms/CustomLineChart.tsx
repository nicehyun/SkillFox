"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ICustomLineChartProps {
  id: string;
  chartData: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}

const CustomLineChart = ({ id, chartData }: ICustomLineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        id={`chart-line__${id}`}
        data={chartData}
        margin={{
          top: 80,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line yAxisId="left" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;

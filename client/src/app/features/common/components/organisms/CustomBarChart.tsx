import React from "react";
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { IChartProps } from "../../types";

const CustomBarShape = ({ fill, x, y, width, height }: any) => {
  return (
    <rect x={x} y={y} width={width} height={height} fill={fill} rx="5" ry="5" />
  );
};

const CustomYAxisTick = ({ x, y, payload, index }: any) => {
  const isTopTen = index < 10;
  return (
    <text
      x={x}
      y={y}
      fontSize={14}
      textAnchor="end"
      fill={isTopTen ? "#F2994A" : "#333"}
      fontWeight={isTopTen ? "bold" : "normal"}
      dominantBaseline="middle"
    >
      {payload.value}
    </text>
  );
};

const CustomLabel = ({ props, count }: { props: any; count: number }) => {
  const { x, y, width, value, viewBox } = props;
  return (
    <text
      x={x + width - 40}
      y={y}
      dy={parseInt(viewBox.height) / 2 + 4}
      fontSize="12"
      fontWeight={700}
      fill="#666"
      textAnchor="start"
    >
      {`${((value / (count ?? 0)) * 100).toFixed(2)}%`}
    </text>
  );
};

interface ICustomBarChartProps extends IChartProps {
  id: string;
}

const CustomBarChart = ({ chartData, count, id }: ICustomBarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%" id={`chart-bar-${id}`}>
      <BarChart
        barSize={25}
        data={chartData}
        layout="vertical"
        margin={{
          left: 80,
          bottom: 20,
        }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="5%" stopColor="#F2994A" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fff" stopOpacity={0.8} />
          </linearGradient>
        </defs>

        <XAxis hide type="number" />

        <YAxis
          dataKey="name"
          type="category"
          tickLine={false}
          axisLine={false}
          tick={<CustomYAxisTick />}
        />

        <Bar
          dataKey="value"
          fill="url(#colorGradient)"
          shape={<CustomBarShape />}
        >
          <LabelList
            dataKey="value"
            position="right"
            content={(props) => <CustomLabel props={props} count={count} />}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;

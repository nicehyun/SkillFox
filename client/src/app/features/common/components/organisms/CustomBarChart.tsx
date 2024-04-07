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

type YAxisTickType = "ratio" | "count";
interface ICustomBarChartProps extends IChartProps {
  id: string;
  emphasisCount: number;
  yAxisTickType?: YAxisTickType;
}

const CustomBarShape = ({ fill, x, y, width, height }: any) => {
  return (
    <rect x={x} y={y} width={width} height={height} fill={fill} rx="5" ry="5" />
  );
};

const CustomYAxisTick = ({
  props,
  emphasisCount,
}: {
  props: any;
  emphasisCount: number;
}) => {
  const { x, y, payload, index } = props;
  const isTopTen = index < emphasisCount;
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

const CustomLabel = ({
  props,
  count,
  yAxisTickType,
}: {
  props: any;
  count: number;
  yAxisTickType: YAxisTickType;
}) => {
  const { x, y, width, value, viewBox } = props;
  const content =
    yAxisTickType === "ratio"
      ? `${((value / (count ?? 0)) * 100).toFixed(2)}%`
      : value;
  return (
    <text
      x={x + width}
      y={y}
      dy={parseInt(viewBox.height) / 2 + 4}
      fontSize="12"
      fontWeight={700}
      fill="#666"
      textAnchor="start"
    >
      {content}
    </text>
  );
};

const CustomBarChart = ({
  chartData,
  count,
  id,
  emphasisCount,
  yAxisTickType = "ratio",
}: ICustomBarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%" id={`chart-bar-${id}`}>
      <BarChart
        barSize={25}
        data={chartData}
        layout="vertical"
        margin={{
          left: 80,
          bottom: 20,
          right: 50,
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
          tick={(props) => (
            <CustomYAxisTick emphasisCount={emphasisCount} props={props} />
          )}
        />

        <Bar
          dataKey="value"
          fill="url(#colorGradient)"
          shape={<CustomBarShape />}
        >
          <LabelList
            dataKey="value"
            position="right"
            content={(props) => (
              <CustomLabel
                props={props}
                count={count}
                yAxisTickType={yAxisTickType}
              />
            )}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;

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
import { LineChartData } from "../../types";
import {
  chartColor,
  extractUniqueLineNames,
  formatChartData,
  getMaxValueFromChartData,
} from "../../utils/chart";

export interface ICustomLineChartProps {
  id: string;
  chartData: LineChartData[];
}

const CustomLineChart = ({ id, chartData }: ICustomLineChartProps) => {
  const renderColorfulLegendText = (value: string) => {
    return (
      <span className="sm:mr-4 sm:text-small md:mr-4 md:text-small">
        {value}
      </span>
    );
  };

  return (
    <ResponsiveContainer height="100%" id={`chart-line-${id}`}>
      <LineChart
        data={formatChartData(chartData)}
        margin={{ right: 5, top: 5, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="xAxisLabel"
          tick={{ fontSize: chartData.length > 3 ? 10 : 12 }}
        />
        <YAxis
          domain={[0, getMaxValueFromChartData(chartData)]}
          tick={{ fontSize: chartData.length > 3 ? 10 : 12 }}
        />
        <Tooltip />

        <Legend formatter={renderColorfulLegendText} />

        {extractUniqueLineNames(chartData).map((lineName, index) => (
          <Line
            key={`line-${id}-${lineName}__${index}`}
            type="monotone"
            dataKey={lineName}
            name={lineName}
            stroke={chartColor[index % chartColor.length]}
            activeDot={{ r: 8 }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;

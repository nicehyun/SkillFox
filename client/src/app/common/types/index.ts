export type Color = "primary" | "secondary" | "gray";
export type Size = "small" | "medium" | "normal";

export interface IColorProps {
  color?: Color;
}

export type ChartData = {
  name: string;
  value: number;
};

export interface IChartProps {
  chartData: ChartData[];
  count: number;
}

export type ObjectChartData = { [key: string]: ChartData[] };

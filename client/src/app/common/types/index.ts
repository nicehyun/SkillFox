export type Color = "primary" | "secondary" | "gray";
export type Size = "small" | "medium" | "normal";

export interface IColorProps {
  color?: Color;
}

export type ChartData = {
  name: string;
  value: number;
};

export type MonthlyChartData = {
  name: string;
  months_value: { [key: number]: number }[];
};

export type SeriesItem = {
  name: string;
  group: "budget" | "actual";
  data: number[];
};

export interface IMonthlyBarChartProps {
  chartData: MonthlyChartData[];
  count: number;
}

export type ObjectChartData = { [key: string]: ChartData[] };

export type EducationChartData = {
  education: string;
  skills: ChartData[];
};

export type RegionChartData = {
  region: string;
  skills: ChartData[];
};

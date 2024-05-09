export type Color = "primary" | "secondary" | "gray";
export type Size = "small" | "medium" | "normal";

export interface IColorProps {
  color?: Color;
}

export type MonthlyChartData = {
  name: string;
  months_value: { [key: number]: number }[];
};

export interface IMonthlyBarChartProps {
  chartData: MonthlyChartData[];
  count: number;
}

export type EducationChartData = {
  education: string;
  data: MonthlyChartData[];
};

export type RegionChartData = {
  region: string;
  data: MonthlyChartData[];
};

export interface ResponseChartData<T> {
  data: T[];
  count: number;
}

export type Aria = {
  ariaLabel: string;
  ariaHasPopup: "dialog" | "menu" | "listbox" | "tree" | "grid" | boolean;
  ariaControls: string;
};

export type Color = "primary" | "secondary";
export type Size = "small" | "medium" | "normal";

export interface IColorProps {
  color?: Color;
}

export interface ISizeProps {
  size?: Size;
}

export interface IColorAndSizeProps {
  color?: Color;
  size?: Size;
}

export type ChartData = {
  name: string;
  value: number;
};

export type LineChartData = {
  xAxisLabel: string;
  linesData: ChartData[];
};

export type FormattedData = {
  xAxisLabel: string;
  [key: string]: number | string;
};

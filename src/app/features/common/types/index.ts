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

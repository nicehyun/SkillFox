import { ReactElement, cloneElement } from "react";

export type IconSize = "small" | "normal" | "large";

export interface IIconProps {
  icon: ReactElement;
  className?: string;
  size?: IconSize;
}

const Icon = ({ icon, className, size = "small" }: IIconProps) => {
  const cloneIcon = cloneElement(icon, {
    className: "w-full h-full",
  });

  return (
    <span
      className={`${className} flexCenter inline-block ${size === "small" ? "h-[20px] w-[20px]" : ""} ${size === "normal" ? "h-[24px] w-[24px]" : ""} ${size === "large" ? "h-[26px] w-[26px]" : ""} p-[2px]`}
    >
      {cloneIcon}
    </span>
  );
};

export default Icon;

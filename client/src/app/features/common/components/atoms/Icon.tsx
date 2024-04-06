import { ReactElement, cloneElement } from "react";

export interface IIconProps {
  icon: ReactElement;
  className?: string;
  size?: "small" | "large";
}

const Icon = ({ icon, className, size = "small" }: IIconProps) => {
  const cloneIcon = cloneElement(icon, {
    className: "w-full h-full",
  });

  return (
    <span
      className={`${className} flexCenter ${size === "small" ? "min-h-[20px] min-w-[20px]" : "min-h-[26px] min-w-[26px]"} p-[2px]`}
    >
      {cloneIcon}
    </span>
  );
};

export default Icon;

import { ReactNode } from "react";

export interface IChartLayoutProps {
  className?: string;
  children: ReactNode;
}

const ChartLayout = ({ className, children }: IChartLayoutProps) => {
  return (
    <div
      className={`${className} rounded-[5px] border-[2px] border-border bg-white py-4`}
    >
      {children}
    </div>
  );
};

export default ChartLayout;

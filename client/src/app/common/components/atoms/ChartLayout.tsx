import { ReactNode } from "react";

interface IChartLayoutProps {
  className?: string;
  children: ReactNode;
}

const ChartLayout = ({ className, children }: IChartLayoutProps) => {
  return (
    <div
      className={`${className} rounded-[5px] border-[2px] border-border bg-primary py-4`}
    >
      {children}
    </div>
  );
};

export default ChartLayout;
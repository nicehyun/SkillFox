import { ReactNode } from "react";
import NoneChartData from "./NoneChartData";

interface IChartWrapperProps<T> {
  chartData: T | undefined;
  children: ReactNode;
}

const ChartWrapper = <T extends { length?: number }>({
  children,
  chartData,
}: IChartWrapperProps<T>) => {
  if (chartData === undefined) return <NoneChartData />;
  return <>{!chartData.length ? <NoneChartData /> : children}</>;
};

export default ChartWrapper;

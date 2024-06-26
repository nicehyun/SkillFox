import { ReactNode } from "react";
import NoneChartData from "../components/molecules/NoneChartData";
import SkeletonShowCountMonthlyBarChart from "../components/organisms/SkeletonShowCountMonthlyBarChart";

export interface IChartWrapperProps<T> {
  chartData: T | undefined;
  isLoading?: boolean;
  children: ReactNode;
}

const ChartWrapper = <T extends { length?: number }>({
  children,
  chartData,
  isLoading = false,
}: IChartWrapperProps<T>) => {
  if (isLoading) return <SkeletonShowCountMonthlyBarChart />;
  if (chartData === undefined) return <NoneChartData />;
  return <>{!chartData.length ? <NoneChartData /> : children}</>;
};

export default ChartWrapper;

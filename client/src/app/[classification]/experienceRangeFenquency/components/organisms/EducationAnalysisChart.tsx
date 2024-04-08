"use client";

import { ChartData } from "@/app/features/common/types";
import ChartLayout from "@/app/features/common/components/atoms/ChartLayout";
import DownloadPDFButton from "@/app/features/common/components/atoms/DownloadPDFButton";
import CustomPieChart from "@/app/features/common/components/organisms/CustomPieChart";
import ToolTip from "@/app/features/common/components/molecules/ToolTip";
import { ReactNode } from "react";

interface IEducationAnalysisChartProps {
  id: string;
  chartData: ChartData[];
  chartTitle: string;
  titleGuideContent: ReactNode;
  className?: string;
}

const EducationAnalysisChart = ({
  id,
  chartData,
  chartTitle,
  titleGuideContent,
  className,
}: IEducationAnalysisChartProps) => {
  return <></>;
};

export default EducationAnalysisChart;

"use client";

import { ChartData } from "@/app/common/types";
import ChartLayout from "@/app/common/components/atoms/ChartLayout";
import DownloadPDFButton from "@/app/common/components/atoms/DownloadPDFButton";
import CustomPieChart from "@/app/common/components/organisms/CustomPieChart";
import ToolTip from "@/app/common/components/molecules/ToolTip";
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

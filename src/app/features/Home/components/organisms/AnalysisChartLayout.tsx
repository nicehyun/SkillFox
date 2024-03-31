"use client";

import ChartTitle from "../Atoms/ChartTitle";
import { ReactNode, useEffect, useState } from "react";

interface IAnalysisChartLayoutProps {
  title: string;
  children: ReactNode;
}

const AnalysisChartLayout = ({
  title,
  children,
}: IAnalysisChartLayoutProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ChartTitle title={title} />
      <div className="h-[400px] min-h-[400px]">{mounted && children}</div>
    </>
  );
};

export default AnalysisChartLayout;

"use client";

import ChartTitle from "../Atoms/ChartTitle";
import { ReactNode, useEffect, useState } from "react";

interface IAnalysisChartLayoutProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const AnalysisChartLayout = ({
  title,
  children,
  className,
}: IAnalysisChartLayoutProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <section className={`${className} min-h-[300px]`}>
        <ChartTitle title={title} />
        {mounted && children}
      </section>
    </>
  );
};

export default AnalysisChartLayout;

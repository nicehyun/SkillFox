"use client";

import { ReactNode } from "react";
import AnalysisNavigation from "../layout/views/AnalysisNavigation";
import PageLayout from "../layout/views/PageLayout";

const AnalysisLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PageLayout>{children}</PageLayout>

      <AnalysisNavigation />
    </>
  );
};

export default AnalysisLayout;

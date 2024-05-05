"use client";

import { ReactNode } from "react";
import AnalysisNavigation from "../layout/views/AnalysisNavigation";
import PageLayout from "../layout/views/PageLayout";
import TooltipModal from "../common/components/organisms/TooltipModal";

const AnalysisLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PageLayout>{children}</PageLayout>
      <TooltipModal />
      <AnalysisNavigation />
    </>
  );
};

export default AnalysisLayout;

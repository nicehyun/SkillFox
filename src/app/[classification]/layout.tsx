export const dynamic = "force-dynamic";

import { ReactNode } from "react";
import AnalysisNavigation from "../layout/views/AnalysisNavigation";
import PageLayout from "../layout/views/PageLayout";
import TooltipModal from "../common/components/organisms/TooltipModal";

interface IAnalysisLayoutProps {
  children: ReactNode;
}

const AnalysisLayout = ({ children }: IAnalysisLayoutProps) => {
  return (
    <>
      <PageLayout>{children}</PageLayout>
      <TooltipModal />
      <AnalysisNavigation />
    </>
  );
};

export default AnalysisLayout;

import { ReactNode } from "react";
import RouteNavigation from "../features/layout/views/RouteNavigation";
import AnalysisNavigation from "../features/layout/views/AnalysisNavigation";

const AnalysisLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <AnalysisNavigation />
      <RouteNavigation />
      <div className="pl-[288px] pr-10">{children}</div>
    </>
  );
};

export default AnalysisLayout;

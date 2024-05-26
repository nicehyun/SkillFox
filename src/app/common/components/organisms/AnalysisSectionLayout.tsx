import { ReactNode } from "react";
import ToolTip from "../molecules/ToolTipButton";
import InteractiveSection from "../../utils/InteractiveSection";
import AnalysisSectionTitle from "../atoms/AnalysisSectionTitle";
import JobPostingCountInfo from "../atoms/JobPostingCountInfo";
import { IconSize } from "../atoms/Icon";

export interface IAnalysisSectionLayoutProps {
  analysisTitle: string;
  children: ReactNode;
  postingCount: number;
  onClickAnalysisTypeToolTip: () => void;
  ToolTipIconSize?: IconSize;
}

const AnalysisSectionLayout = ({
  analysisTitle,
  children,
  postingCount,
  onClickAnalysisTypeToolTip,
  ToolTipIconSize = "small",
}: IAnalysisSectionLayoutProps) => {
  return (
    <InteractiveSection>
      <div className="mb-2 flex items-center">
        <AnalysisSectionTitle title={analysisTitle} className="mr-2" />
        <ToolTip
          analysisClassification={`${analysisTitle}`}
          onClick={onClickAnalysisTypeToolTip}
          iconSize={ToolTipIconSize}
        />
      </div>

      <JobPostingCountInfo postingCount={postingCount} className="mb-14" />

      {children}
    </InteractiveSection>
  );
};

export default AnalysisSectionLayout;

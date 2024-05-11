import { ReactNode } from "react";
import ToolTip from "../molecules/ToolTipButton";
import InteractiveSection from "./InteractiveSection";

export interface IAnalysisSectionLayoutProps {
  analysisTitle: string;
  children: ReactNode;
  postingCount: number;
  onClickAnalysisTypeToolTip: () => void;
  isShowTooltipModal: boolean;
}

const AnalysisSectionLayout = ({
  analysisTitle,
  children,
  postingCount,
  onClickAnalysisTypeToolTip,
  isShowTooltipModal,
}: IAnalysisSectionLayoutProps) => {
  return (
    <InteractiveSection>
      <div className="mb-2 flex items-center">
        <h1 className="mr-2 text-medium font-bold sm:text-small md:text-normal">
          {analysisTitle}
        </h1>
        <ToolTip
          analysisClassification={`${analysisTitle}`}
          isOpen={isShowTooltipModal}
          onClick={onClickAnalysisTypeToolTip}
        />
      </div>

      <span className="mb-14 inline-block text-small text-gray1">
        채용 공고 <strong className="text-black3">{postingCount}</strong>건을
        분석한 결과입니다.
      </span>

      {children}
    </InteractiveSection>
  );
};

export default AnalysisSectionLayout;

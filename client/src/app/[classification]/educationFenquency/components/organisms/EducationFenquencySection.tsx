"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";
import EducationAnalysisCharts from "./EducationAnalysisCharts";
import MainGuideContent from "../molecules/MainGuideContent";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const EducationFenquencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const { data, error, isError } = useGetEducationFrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <>
      <AnalysisSectionLayout
        analysisTitle="학력별 기술 분석"
        guide={guideProps}
        postingCount={data?.count ?? 0}
      >
        <EducationAnalysisCharts />
      </AnalysisSectionLayout>
    </>
  );
};

export default EducationFenquencySection;

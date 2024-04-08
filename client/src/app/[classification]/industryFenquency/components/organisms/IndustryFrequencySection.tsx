"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/features/common/components/organisms/AnalysisSectionLayout";
import { useGetIndustryFrequencyQuery } from "../../hooks/useGetIndustryFrequencyQuery";
import IndustryAnalysisChart from "./IndustryAnalysisChart";
import MainGuideContent from "../molecules/MainGuideContent";

interface IIndustryFrequencySectionProps {
  postingClassification: string;
}

const IndustryFrequencySection = ({
  postingClassification,
}: IIndustryFrequencySectionProps) => {
  const { data, error, isError } = useGetIndustryFrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="산업별 기술 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
    >
      <IndustryAnalysisChart
        chartData={data?.data ?? []}
        count={data?.count ?? 0}
      />
    </AnalysisSectionLayout>
  );
};

export default IndustryFrequencySection;

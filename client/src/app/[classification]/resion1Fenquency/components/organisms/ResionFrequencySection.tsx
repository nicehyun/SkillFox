"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";

import ResionAnalysisCharts from "./ResionAnalysisCharts";
import MainGuideContent from "../molecules/MainGuideContent";
import { useGetResion1FrequencyQuery } from "../../hooks/useGetResion1FrequencyQuery";

interface IResionFrequencySectionProps {
  postingClassification: string;
}

const ResionFrequencySection = ({
  postingClassification,
}: IResionFrequencySectionProps) => {
  const { data, error, isError } = useGetResion1FrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="지역별 기술 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
    >
      {data?.data && <ResionAnalysisCharts />}
    </AnalysisSectionLayout>
  );
};

export default ResionFrequencySection;

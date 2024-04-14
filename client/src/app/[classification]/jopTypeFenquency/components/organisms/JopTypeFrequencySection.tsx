"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetJobTypeFrequencyQuery } from "../../hooks/useGetJobTypeFrequencyQuery";
import JopTypeAnalysisChart from "./JopTypeAnalysisChart";
import MainGuideContent from "../molecules/MainGuideContent";

interface IJopTypeFrequencySectionProps {
  postingClassification: string;
}

const JopTypeFrequencySection = ({
  postingClassification,
}: IJopTypeFrequencySectionProps) => {
  const { data, error, isError } = useGetJobTypeFrequencyQuery();
  console.log(data);

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
      {data?.data && <JopTypeAnalysisChart chartData={data?.data} />}
    </AnalysisSectionLayout>
  );
};

export default JopTypeFrequencySection;

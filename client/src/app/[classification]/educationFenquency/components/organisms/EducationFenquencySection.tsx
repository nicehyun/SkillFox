"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/features/common/components/organisms/AnalysisSectionLayout";

import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";

import EducationAnalysisChart from "./EducationAnalysisChart";
import ToolTip from "@/app/features/common/components/molecules/ToolTip";

const EducationFenquencySection = () => {
  const { data, error, isError } = useGetEducationFrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

  const noneEducationChartData = data?.data["학력무관"];

  const guideProps: GuideProps = {
    titleGuideContent: <></>,
    postingClassification: "프론트엔드",
  };

  return (
    <>
      <AnalysisSectionLayout
        analysisTitle="학력별 기술 분석"
        guide={guideProps}
        postingCount={data?.count ?? 0}
      >
        {noneEducationChartData && (
          <EducationAnalysisChart
            id="none-education"
            chartTitle="학력 무관 기술 분석"
            titleGuideContent={<></>}
            chartData={noneEducationChartData}
          />
        )}
      </AnalysisSectionLayout>
    </>
  );
};

export default EducationFenquencySection;

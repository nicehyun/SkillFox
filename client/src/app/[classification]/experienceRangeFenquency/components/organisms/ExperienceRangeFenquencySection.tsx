"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetExperienceRangeFrequencyQuery } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import MainGuideContent from "../molecules/MainGuideContent";
import SelectShowCountBarChart from "@/app/common/components/organisms/SelectShowCountBarChart";
import ExperienceRangeContoller from "../molecules/ExperienceRangeContoller";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const ExperienceRangeFenquencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const { data, isLoading, onClickExperienceRangeApply } =
    useGetExperienceRangeFrequencyQuery();

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <>
      <AnalysisSectionLayout
        analysisTitle="경력별 기술 분석"
        guide={guideProps}
        postingCount={data?.count ?? 0}
      >
        <ExperienceRangeContoller
          onClickExperienceRangeApply={onClickExperienceRangeApply}
        />
        <SelectShowCountBarChart
          id="experience-range-Frenquency"
          yAxisTickType="count"
          emphasisCount={10}
          chartData={data?.data ?? []}
          count={data?.count ?? 0}
        />
      </AnalysisSectionLayout>
    </>
  );
};

export default ExperienceRangeFenquencySection;

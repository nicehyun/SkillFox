"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetExperienceRangeFrequencyQuery } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import MainGuideContent from "../molecules/MainGuideContent";
import ExperienceRangeContoller from "../molecules/ExperienceRangeContoller";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { MonthlyChartData } from "@/app/common/types";
import DynamicSelectShowCountMonthlyBarChart from "@/app/common/components/organisms/DynamicSelectShowCountMonthlyBarChart";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const ExperienceRangeFenquencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const {
    data,
    isLoading,
    onClickExperienceRangeApply,
    experienceMax,
    experienceMin,
    onChangeExperienceMaxValue,
    onChangeExperienceMinValue,
  } = useGetExperienceRangeFrequencyQuery();

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
          isDisabled={isLoading}
          onClickExperienceRangeApply={onClickExperienceRangeApply}
          experienceMax={experienceMax}
          experienceMin={experienceMin}
          onChangeExperienceMaxValue={onChangeExperienceMaxValue}
          onChangeExperienceMinValue={onChangeExperienceMinValue}
        />

        <ChartWrapper<MonthlyChartData[]>
          chartData={data?.data}
          isLoading={isLoading}
        >
          <DynamicSelectShowCountMonthlyBarChart
            id="experience-range-Frenquency"
            chartData={data?.data ?? []}
            count={data?.count ?? 0}
          />
        </ChartWrapper>
      </AnalysisSectionLayout>
    </>
  );
};

export default ExperienceRangeFenquencySection;

"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetExperienceRangeFrequencyQuery } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import MainGuideContent from "../molecules/MainGuideContent";
import SelectShowCountBarChart from "@/app/common/components/organisms/SelectShowCountMonthlyBarChart";
import ExperienceRangeContoller from "../molecules/ExperienceRangeContoller";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { MonthlyChartData } from "@/app/common/types";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const ExperienceRangeFenquencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const { data, onClickExperienceRangeApply } =
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
        <ChartWrapper<MonthlyChartData[]> chartData={data?.data}>
          <ExperienceRangeContoller
            onClickExperienceRangeApply={onClickExperienceRangeApply}
          />

          <SelectShowCountBarChart
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

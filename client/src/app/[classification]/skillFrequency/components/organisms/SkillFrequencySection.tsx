"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import MainGuideContent from "../molecules/MainGuideContent";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { MonthlyChartData } from "@/app/common/types";
import DynamicSelectShowCountMonthlyBarChart from "@/app/common/components/organisms/DynamicSelectShowCountMonthlyBarChart";
import SkeletonShowCountMonthlyBarChart from "@/app/common/components/organisms/SkeletonShowCountMonthlyBarChart";

interface ISkillFrequencySectionProps {
  postingClassification: string;
}

const SkillFrequencySection = ({
  postingClassification,
}: ISkillFrequencySectionProps) => {
  const { data } = useGetSkillFrequencyQuery();

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="기술 빈도 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
    >
      <ChartWrapper<MonthlyChartData[]> chartData={data?.data}>
        <DynamicSelectShowCountMonthlyBarChart
          id="skill-Frequency"
          chartData={data?.data ?? []}
          count={data?.count ?? 0}
        />
      </ChartWrapper>
    </AnalysisSectionLayout>
  );
};

export default SkillFrequencySection;

"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import MainGuideContent from "../molecules/MainGuideContent";
import SelectShowCountBarChart from "@/app/common/components/organisms/SelectShowCountMonthlyBarChart";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { MonthlyChartData } from "@/app/common/types";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const SkillFrequencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
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
        <SelectShowCountBarChart
          id="skill-Frequency"
          chartData={data?.data ?? []}
          count={data?.count ?? 0}
        />
      </ChartWrapper>
    </AnalysisSectionLayout>
  );
};

export default SkillFrequencySection;

"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { MonthlyChartData } from "@/app/common/types";
import DynamicSelectShowCountMonthlyBarChart from "@/app/common/components/organisms/DynamicSelectShowCountMonthlyBarChart";
import { useTooltipModalController } from "@/app/common/hooks/useTooltipModalController";

const SkillFrequencySection = () => {
  const { data } = useGetSkillFrequencyQuery();
  const { showTooltipModal } = useTooltipModalController();

  return (
    <AnalysisSectionLayout
      analysisTitle="기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => showTooltipModal(1)}
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

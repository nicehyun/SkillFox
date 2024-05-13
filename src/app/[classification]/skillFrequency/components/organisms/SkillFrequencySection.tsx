"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import ChartWrapper from "@/app/common/utils/ChartWrapper";
import { MonthlyChartData } from "@/app/common/types";
import DynamicSelectShowCountMonthlyBarChart from "@/app/common/utils/DynamicSelectShowCountMonthlyBarChart";
import { useTooltipModalController } from "@/app/common/hooks/useTooltipModalController";

const SkillFrequencySection = () => {
  const { data } = useGetSkillFrequencyQuery();
  const { showTooltipModal, isShowTooltipModal } = useTooltipModalController();

  return (
    <AnalysisSectionLayout
      analysisTitle="기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => showTooltipModal(1)}
      postingCount={data?.count ?? 0}
      isShowTooltipModal={isShowTooltipModal}
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

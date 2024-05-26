"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import ChartWrapper from "@/app/common/utils/ChartWrapper";
import { MonthlyChartData } from "@/app/common/types";
import DynamicSelectShowCountMonthlyBarChart from "@/app/common/utils/DynamicSelectShowCountMonthlyBarChart";

import { showTooltipModal } from "@/redux/features/layoutSlice";
import { useAppDispatch } from "@/redux/hooks";

const SkillFrequencySection = () => {
  const { data } = useGetSkillFrequencyQuery();
  const dispatch = useAppDispatch();

  return (
    <AnalysisSectionLayout
      analysisTitle="기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => dispatch(showTooltipModal({ page: 1 }))}
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

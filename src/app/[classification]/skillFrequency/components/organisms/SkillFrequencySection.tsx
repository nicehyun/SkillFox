"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import ChartWrapper from "@/app/common/utils/ChartWrapper";
import { showTooltipModal } from "@/redux/features/layoutSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ChartDataset } from "chart.js";
import DynamicSelectShowCountMonthlyBarChart from "@/app/common/utils/DynamicSelectShowCountMonthlyBarChart";

const SkillFrequencySection = () => {
  const { data } = useGetSkillFrequencyQuery();
  const dispatch = useAppDispatch();

  return (
    <AnalysisSectionLayout
      analysisTitle="기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => dispatch(showTooltipModal({ page: 1 }))}
      postingCount={data?.count ?? 0}
    >
      <ChartWrapper<Array<ChartDataset<"bar", number[]>>>
        chartData={data?.datasets ?? []}
      >
        <DynamicSelectShowCountMonthlyBarChart
          id="skill-Frequency"
          chartData={{ datasets: data?.datasets ?? [], labels: data?.labels }}
        />
      </ChartWrapper>
    </AnalysisSectionLayout>
  );
};

export default SkillFrequencySection;

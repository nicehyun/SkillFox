"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import { showTooltipModal } from "@/redux/features/layoutSlice";
import { useAppDispatch } from "@/redux/hooks";
import DynamicSelectShowCountMonthlyBarChartWrapper from "@/app/common/utils/DynamicSelectShowCountMonthlyBarChartWrapper";

const SkillFrequencySection = () => {
  const { data } = useGetSkillFrequencyQuery();
  const dispatch = useAppDispatch();

  return (
    <AnalysisSectionLayout
      analysisTitle="기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => dispatch(showTooltipModal({ page: 1 }))}
      postingCount={data?.count ?? 0}
    >
      <DynamicSelectShowCountMonthlyBarChartWrapper
        id="skill-Frequency"
        chartData={data}
      />
    </AnalysisSectionLayout>
  );
};

export default SkillFrequencySection;

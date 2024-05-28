"use client";

import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetExperienceRangeFrequencyQuery } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import ExperienceRangeContoller from "../molecules/ExperienceRangeContoller";
import { useAppDispatch } from "@/redux/hooks";
import { showTooltipModal } from "@/redux/features/layoutSlice";
import DynamicSelectShowCountMonthlyBarChartWrapper from "@/app/common/utils/DynamicSelectShowCountMonthlyBarChartWrapper";

const ExperienceRangeFenquencySection = () => {
  const { data, isLoading, onClickExperienceRangeApply } =
    useGetExperienceRangeFrequencyQuery();

  const dispatch = useAppDispatch();

  return (
    <AnalysisSectionLayout
      analysisTitle="경력별 기술 분석"
      onClickAnalysisTypeToolTip={() => dispatch(showTooltipModal({ page: 4 }))}
      postingCount={data?.count ?? 0}
    >
      <ExperienceRangeContoller
        isDisabled={isLoading}
        onClickExperienceRangeApply={onClickExperienceRangeApply}
      />

      <DynamicSelectShowCountMonthlyBarChartWrapper
        id="experience-range-Frenquency"
        chartData={data}
      />
    </AnalysisSectionLayout>
  );
};

export default ExperienceRangeFenquencySection;

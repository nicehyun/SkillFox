"use client";

import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetExperienceRangeFrequencyQuery } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import ExperienceRangeContoller from "../molecules/ExperienceRangeContoller";
import ChartWrapper from "@/app/common/utils/ChartWrapper";
import { MonthlyChartData } from "@/app/common/types";
import DynamicSelectShowCountMonthlyBarChart from "@/app/common/utils/DynamicSelectShowCountMonthlyBarChart";
import { useTooltipModalController } from "@/app/common/hooks/useTooltipModalController";

const ExperienceRangeFenquencySection = () => {
  const { data, isLoading, onClickExperienceRangeApply } =
    useGetExperienceRangeFrequencyQuery();
  const { showTooltipModal, isShowTooltipModal } = useTooltipModalController();

  return (
    <>
      <AnalysisSectionLayout
        analysisTitle="경력별 기술 분석"
        onClickAnalysisTypeToolTip={() => showTooltipModal(4)}
        postingCount={data?.count ?? 0}
        isShowTooltipModal={isShowTooltipModal}
      >
        <ExperienceRangeContoller
          isDisabled={isLoading}
          onClickExperienceRangeApply={onClickExperienceRangeApply}
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

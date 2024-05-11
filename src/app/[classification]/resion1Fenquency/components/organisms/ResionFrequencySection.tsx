"use client";

import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetResion1FrequencyQuery } from "../../hooks/useGetResion1FrequencyQuery";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { RegionChartData } from "@/app/common/types";
import { useTooltipModalController } from "@/app/common/hooks/useTooltipModalController";

const ResionFrequencySection = () => {
  const { data } = useGetResion1FrequencyQuery();
  const { showTooltipModal, isShowTooltipModal } = useTooltipModalController();

  return (
    <AnalysisSectionLayout
      analysisTitle="지역별 기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => showTooltipModal(2)}
      postingCount={data?.count ?? 0}
      isShowTooltipModal={isShowTooltipModal}
    >
      <ChartWrapper<RegionChartData[]> chartData={data?.data}>
        {data?.data.map((resionChart, index) => (
          <IndividualBarChart
            key={`region-Frenquency__${index}`}
            id={`region-Frenquency__${index}`}
            chartData={resionChart.data ?? []}
            count={data?.count ?? 0}
            chartTitle={resionChart.region}
            className={index !== 0 ? "mt-20" : ""}
          />
        ))}
      </ChartWrapper>
    </AnalysisSectionLayout>
  );
};

export default ResionFrequencySection;

"use client";

import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { EducationChartData } from "@/app/common/types";
import { useTooltipModalController } from "@/app/common/hooks/useTooltipModalController";

const EducationFenquencySection = () => {
  const { data } = useGetEducationFrequencyQuery();
  const { showTooltipModal, isShowTooltipModal } = useTooltipModalController();

  return (
    <AnalysisSectionLayout
      analysisTitle="학력별 기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => showTooltipModal(3)}
      postingCount={data?.count ?? 0}
      isShowTooltipModal={isShowTooltipModal}
    >
      <ChartWrapper<EducationChartData[]> chartData={data?.data}>
        {data?.data.map((educationChart, index) => (
          <IndividualBarChart
            key={`education-Frenquency__${index}`}
            id={`education-Frenquency__${index}`}
            chartData={educationChart.data ?? []}
            count={data?.count ?? 0}
            chartTitle={educationChart.education}
            className={index !== 0 ? "mt-20" : ""}
          />
        ))}
      </ChartWrapper>
    </AnalysisSectionLayout>
  );
};

export default EducationFenquencySection;

"use client";

import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetResion1FrequencyQuery } from "../../hooks/useGetResion1FrequencyQuery";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";
import ChartWrapper from "@/app/common/utils/ChartWrapper";
import { RegionChartData } from "@/app/common/types";
import { useAppDispatch } from "@/redux/hooks";
import { showTooltipModal } from "@/redux/features/layoutSlice";

const ResionFrequencySection = () => {
  const { data } = useGetResion1FrequencyQuery();

  const dispatch = useAppDispatch();

  return (
    <AnalysisSectionLayout
      analysisTitle="지역별 기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => dispatch(showTooltipModal({ page: 4 }))}
      postingCount={data?.count ?? 0}
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

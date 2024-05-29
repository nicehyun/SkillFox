"use client";

import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetResion1FrequencyQuery } from "../../hooks/useGetResion1FrequencyQuery";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";
import { useAppDispatch } from "@/redux/hooks";
import { showTooltipModal } from "@/redux/features/layoutSlice";
import DynamicIndividualBarChart from "@/app/common/utils/DynamicIndividualBarChart";

const ResionFrequencySection = () => {
  const { data } = useGetResion1FrequencyQuery();

  const dispatch = useAppDispatch();

  return (
    <AnalysisSectionLayout
      analysisTitle="지역별 기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => dispatch(showTooltipModal({ page: 4 }))}
      postingCount={data?.count ?? 0}
    >
      {data?.chartData.map((resionChart, index) =>
        index === 0 ? (
          <IndividualBarChart
            key={`region-Frenquency__${index}`}
            id={`region-Frenquency__${index}`}
            chartData={resionChart}
            chartTitle={resionChart.region}
            className={index !== 0 ? "mt-20" : ""}
          />
        ) : (
          <DynamicIndividualBarChart
            key={`region-Frenquency__${index}`}
            id={`region-Frenquency__${index}`}
            chartData={resionChart}
            chartTitle={resionChart.region}
            className={index !== 0 ? "mt-20" : ""}
          />
        ),
      )}
    </AnalysisSectionLayout>
  );
};

export default ResionFrequencySection;

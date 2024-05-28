"use client";

import AnalysisSectionLayout from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";
import { useAppDispatch } from "@/redux/hooks";
import { showTooltipModal } from "@/redux/features/layoutSlice";

const EducationFenquencySection = () => {
  const { data } = useGetEducationFrequencyQuery();

  const dispatch = useAppDispatch();

  return (
    <AnalysisSectionLayout
      analysisTitle="학력별 기술 빈도 분석"
      onClickAnalysisTypeToolTip={() => dispatch(showTooltipModal({ page: 3 }))}
      postingCount={data?.count ?? 0}
    >
      {data?.chartData.map((resionChart, index) => (
        <IndividualBarChart
          key={`education-Frenquency__${index}`}
          id={`education-Frenquency__${index}`}
          chartData={resionChart}
          chartTitle={resionChart.education}
          className={index !== 0 ? "mt-20" : ""}
        />
      ))}
    </AnalysisSectionLayout>
  );
};

export default EducationFenquencySection;

"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";
import MainGuideContent from "../molecules/MainGuideContent";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { EducationChartData } from "@/app/common/types";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const EducationFenquencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const { data } = useGetEducationFrequencyQuery();

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="학력별 기술 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
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

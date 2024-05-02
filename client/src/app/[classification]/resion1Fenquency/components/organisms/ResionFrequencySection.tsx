"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import MainGuideContent from "../molecules/MainGuideContent";
import { useGetResion1FrequencyQuery } from "../../hooks/useGetResion1FrequencyQuery";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";
import ChartWrapper from "@/app/common/components/organisms/ChartWrapper";
import { RegionChartData } from "@/app/common/types";

interface IResionFrequencySectionProps {
  postingClassification: string;
}

const ResionFrequencySection = ({
  postingClassification,
}: IResionFrequencySectionProps) => {
  const { data } = useGetResion1FrequencyQuery();

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="지역별 기술 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
    >
      <ChartWrapper<RegionChartData[]> chartData={data?.data}>
        {data?.data.map((resionChart, index) => (
          <IndividualBarChart
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

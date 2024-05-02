"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import MainGuideContent from "../molecules/MainGuideContent";
import { useGetResion1FrequencyQuery } from "../../hooks/useGetResion1FrequencyQuery";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";

interface IResionFrequencySectionProps {
  postingClassification: string;
}

const ResionFrequencySection = ({
  postingClassification,
}: IResionFrequencySectionProps) => {
  const { data, error, isError } = useGetResion1FrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

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
      {data?.data.map((resionChart, index) => (
        <IndividualBarChart
          id={`region-Frenquency__${index}`}
          chartData={resionChart.data ?? []}
          count={data?.count ?? 0}
          chartTitle={resionChart.region}
          className={index !== 0 ? "mt-20" : ""}
        />
      ))}
    </AnalysisSectionLayout>
  );
};

export default ResionFrequencySection;

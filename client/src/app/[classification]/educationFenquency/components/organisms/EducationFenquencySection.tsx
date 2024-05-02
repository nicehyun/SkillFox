"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";
import MainGuideContent from "../molecules/MainGuideContent";
import IndividualBarChart from "@/app/common/components/organisms/IndividualBarChart";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const EducationFenquencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const { data, error, isError } = useGetEducationFrequencyQuery();
  console.log(data);

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <>
      <AnalysisSectionLayout
        analysisTitle="학력별 기술 분석"
        guide={guideProps}
        postingCount={data?.count ?? 0}
      >
        {data?.data.map((educationChart, index) => (
          <IndividualBarChart
            id={`education-Frenquency__${index}`}
            chartData={educationChart.data ?? []}
            count={data?.count ?? 0}
            chartTitle={educationChart.education}
            className={index !== 0 ? "mt-20" : ""}
          />
        ))}
      </AnalysisSectionLayout>
    </>
  );
};

export default EducationFenquencySection;

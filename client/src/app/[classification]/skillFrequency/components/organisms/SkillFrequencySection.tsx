"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/common/components/organisms/AnalysisSectionLayout";
import MainGuideContent from "../molecules/MainGuideContent";
import SelectShowCountBarChart from "@/app/common/components/organisms/SelectShowCountBarChart";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const SkillFrequencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const { data, error, isError, isLoading } = useGetSkillFrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: <MainGuideContent />,
    postingClassification,
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="기술 빈도 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
    >
      <SelectShowCountBarChart
        id="skill-Frenquency"
        emphasisCount={10}
        chartData={data?.data ?? []}
        count={data?.count ?? 0}
      />
    </AnalysisSectionLayout>
  );
};

export default SkillFrequencySection;

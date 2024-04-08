"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/features/common/components/organisms/AnalysisSectionLayout";
import { useGetExperienceRangeFrequencyQuery } from "../../hooks/useGetExperienceRangeFrequencyQuery";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const ExperienceRangeFenquencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const { data, error, isError } = useGetExperienceRangeFrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: <></>,
    postingClassification,
  };

  return (
    <>
      <AnalysisSectionLayout
        analysisTitle="경력별 기술 분석"
        guide={guideProps}
        postingCount={data?.count ?? 0}
      >
        <></>
      </AnalysisSectionLayout>
    </>
  );
};

export default ExperienceRangeFenquencySection;

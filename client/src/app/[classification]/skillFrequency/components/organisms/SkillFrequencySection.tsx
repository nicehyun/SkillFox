"use client";

import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/features/common/components/organisms/AnalysisSectionLayout";
import SkillAnalysisChart from "./SkillAnalysisChart";

interface IEducationFenquencySectionProps {
  postingClassification: string;
}

const SkillFrequencySection = ({
  postingClassification,
}: IEducationFenquencySectionProps) => {
  const { data, error, isError, isLoading } = useGetSkillFrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: (
      <>
        <strong>기술 빈도 분석</strong>은 채용공고에 등록된 기술들의 빈도를
        분석한 결과입니다.
        <br />
        <br />
        분석 결과를 통해{" "}
        <strong>현재 채용 시장에서 요구하는 기술 또는 키워드를 파악</strong>할
        수 있습니다.
        <br />
        <br />
        🎨<strong>상위 10개의 기술 또는 키워드</strong>는 별도의 색상으로
        표시하고 있습니다.
      </>
    ),
    postingClassification,
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="기술 빈도 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
    >
      <SkillAnalysisChart
        chartData={data?.data ?? []}
        count={data?.count ?? 0}
      />
    </AnalysisSectionLayout>
  );
};

export default SkillFrequencySection;

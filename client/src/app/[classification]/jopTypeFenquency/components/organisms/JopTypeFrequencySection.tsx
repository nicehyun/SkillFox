"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/features/common/components/organisms/AnalysisSectionLayout";
import {
  ResponseChartData,
  useGetJobTypeFrequencyQuery,
} from "../../hooks/useGetJobTypeFrequencyQuery";
import JopTypeAnalysisChart from "./JopTypeAnalysisChart";

interface IJopTypeFrequencySectionProps {
  postingClassification: string;
}

const JopTypeFrequencySection = ({
  postingClassification,
}: IJopTypeFrequencySectionProps) => {
  const { data, error, isError } = useGetJobTypeFrequencyQuery();

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: (
      <>
        <strong>근무 형태별 기술 분석</strong>은 각각의 근무형태를 기준으로 채용
        공고들에 등록된 기술 또는 키워드를 분석한 결과입니다.
        <br />
        <br />
        <strong>근무 형태별 기술 분석</strong>은 아래의 프로세스로 분석을
        진행합니다.
        <br />
        <br />
        🍳근무 형태별로{" "}
        <strong>각각의 채용 공고에 등록된 기술 또는 키워드를 집계</strong>
        합니다.
        <br />
        <br />
        🍳집계한 결과를 <strong>근무 형태별로 합산</strong>을 진행합니다.
        <br />
        <br />
        분석 결과를 통해{" "}
        <strong>
          근무 형태별 채용 공고에 등록된 상위 10개의 기술 또는 키워드를 파악
        </strong>
        할 수 있습니다.
      </>
    ),
    postingClassification,
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="근무 형태별 기술 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
    >
      {data?.data && <JopTypeAnalysisChart chartData={data?.data} />}
    </AnalysisSectionLayout>
  );
};

export default JopTypeFrequencySection;

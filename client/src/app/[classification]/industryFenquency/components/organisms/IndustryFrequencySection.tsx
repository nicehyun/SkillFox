"use client";

import AnalysisSectionLayout, {
  GuideProps,
} from "@/app/features/common/components/organisms/AnalysisSectionLayout";
import { useGetIndustryFrequencyQuery } from "../../hooks/useGetIndustryFrequencyQuery";
import IndustryAnalysisChart from "./IndustryAnalysisChart";

const IndustryFrequencySection = () => {
  const { data, error, isError } = useGetIndustryFrequencyQuery();

  console.log(data);

  //   if (isError) return <div>Error: {error.message}</div>;

  const guideProps: GuideProps = {
    titleGuideContent: (
      <>
        <strong>산업별 기술 분석</strong>은 아래의 프로세스로 분석을 진행합니다.
        <br />
        <br />
        🍳<strong>기술 빈도 분석 결과</strong>를 기준으로 분석합니다.
        <br />
        <br />
        🍳채용 공고에 등록된 기술들 중{" "}
        <strong>기술 또는 키워드의 일치 수를 집계</strong>합니다.
        <br />
        <br />
        🍳집계한 결과를 <strong>해당 채용 공고에 등록된 산업과 매핑</strong>
        합니다.
        <br />
        <br />
        🍳각각의 채용 공고의 매핑을 결과를 토대로{" "}
        <strong>
          산업별 상위 기술 또는 키워드를 가장 많이 포함하는 10개의 산업을 추출
        </strong>
        합니다.
        <br />
        <br />
        분석 결과를 통해{" "}
        <strong>
          상위 50개의 기술 또는 키워드를 가장 많이 포함하는 산업을 파악
        </strong>
        할 수 있습니다.
      </>
    ),
    postingClassification: "프론트엔드",
  };

  return (
    <AnalysisSectionLayout
      analysisTitle="산업별 기술 분석"
      guide={guideProps}
      postingCount={data?.count ?? 0}
    >
      <IndustryAnalysisChart
        chartData={data?.data ?? []}
        count={data?.count ?? 0}
      />
    </AnalysisSectionLayout>
  );
};

export default IndustryFrequencySection;

import { ReactNode } from "react";
import ToolTip from "../molecules/ToolTip";

export type GuideProps = {
  titleGuideContent: ReactNode;
  postingClassification: string;
};

export interface IAnalysisSectionLayoutProps {
  analysisTitle: string;
  children: ReactNode;
  postingCount: number;
  guide: GuideProps;
}

const AnalysisSectionLayout = ({
  analysisTitle,
  children,
  postingCount,
  guide,
}: IAnalysisSectionLayoutProps) => {
  const { titleGuideContent, postingClassification } = guide;

  console.log(postingClassification);
  return (
    <section>
      <div className="mb-2 flex items-center">
        <h1 className="mr-2 text-medium font-bold sm:text-normal md:text-normal">
          {analysisTitle}
        </h1>
        <ToolTip
          title={`${analysisTitle} 가이드`}
          guideContent={titleGuideContent}
          ariaLabel={`${analysisTitle} 툴팁`}
        />
      </div>

      <div className="mb-14 flex items-center">
        <span className="text-small text-gray1">
          채용 공고 <strong className="text-black3">{postingCount}</strong>건을
          분석한 결과입니다.
        </span>

        <ToolTip
          title="채용 공고 수량 가이드"
          guideContent={
            <>
              분석에 사용되는 채용 공고는 아래의 필터링을 거칩니다.
              <br />
              <br />
              🍳전체 채용 공고 중 직무가 <strong>IT개발・데이터</strong>인
              채용공고를 필터링합니다.
              <br />
              <br />
              🍳등록된 기술이 <strong>{postingClassification}</strong>가 포함된
              채용 공고를 필터링 합니다.
            </>
          }
          ariaLabel="채용공고 수량 툴팁"
        />
      </div>

      {children}
    </section>
  );
};

export default AnalysisSectionLayout;

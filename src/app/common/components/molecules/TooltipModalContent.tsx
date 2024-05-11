import { getPreviousMonth } from "../../utils/date";
import TooltipExampleCurrentChart from "./TooltipExampleCurrentChart";
import TooltipExamplePrevChart from "./TooltipExamplePrevChart";

export interface ITooltipModalContentProps {
  currentTooltipPage: number;
}

const TooltipModalContent = ({
  currentTooltipPage,
}: ITooltipModalContentProps) => {
  const handleTooltipModalContent = (tooltipPage: number) => {
    switch (tooltipPage) {
      case 1:
        return (
          <p>
            🍳 <strong>기술 빈도 분석</strong>은 <strong>최근 6개월</strong>
            간의 채용 공고를 분석하여 특정 기술의 빈도를 분석한 결과입니다.
          </p>
        );

      case 2:
        return (
          <p>
            🍳 <strong>지역별 기술 빈도 분석</strong>은
            <strong>최근 6개월</strong> 간의 채용 공고를{" "}
            <strong>지역별로 분류</strong> 후 분석하여 특정 기술의 빈도를 분석한
            결과입니다.
          </p>
        );

      case 3:
        return (
          <p>
            🍳 <strong>학력별 기술 빈도 분석</strong>은
            <strong>최근 6개월</strong> 간의 채용 공고를{" "}
            <strong>지역별로 분류</strong> 후 분석하여 특정 기술의 빈도를 분석한
            결과입니다.
          </p>
        );

      case 4:
        return (
          <>
            <p>
              🍳 <strong>경력별 기술 빈도 분석</strong>은
              <strong>최근 6개월</strong> 간의 채용 공고를{" "}
              <strong>지역별로 분류</strong> 후 분석하여 특정 기술의 빈도를
              분석한 결과입니다.
            </p>
            <p>🍳 경력 범위 조절을 통해 채용 공고 필터링이 가능합니다.</p>
          </>
        );

      default:
        return <></>;
    }
  };

  return (
    <div className="mb-10 grow space-y-6 overflow-y-scroll border-b-[1px] border-border pb-6 pr-2">
      {handleTooltipModalContent(currentTooltipPage)}

      <p>
        🍳 <strong>{getPreviousMonth(0)}</strong>에 수집된 채용 공고를 기반으로
        하며, 이를 통해{" "}
        <strong>현재 채용 시장에서 가장 많이 요구되는 상위 50개의 기술</strong>
        을 식별합니다.
      </p>

      <TooltipExampleCurrentChart />

      <p className="">
        예를 들어, 위의 분석 결과는{" "}
        <strong>
          {getPreviousMonth(0)}에 수집된 채용 공고들 중 'react' 기술을 요구하는
          채용 공고의 수가 150개
        </strong>
        라는 의미입니다.
      </p>
      <p>
        🍳 <strong>{getPreviousMonth(0)}</strong>의 상위 50개의 기술을 기준으로{" "}
        <strong>이전 5개월 간의 채용 공고를 분석</strong>하여 각 기술이 얼마나
        자주 등장했는지의 분석 결과를 함께 제공합니다.
      </p>

      <TooltipExamplePrevChart />
      <p>
        분석 결과를 통해 특정 기술의 최근 6개월 간 동향 파악할 수 있으며, 채용
        시장 내에서의 중요성과 추세를 파악할 수 있습니다.
      </p>
    </div>
  );
};

export default TooltipModalContent;

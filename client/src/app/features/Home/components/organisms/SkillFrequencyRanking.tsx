import { ChartData, IColorProps } from "@/app/features/common/types";
import ChartRanking from "../molecules/ChartRanking";
import AnalysisChartLayout from "./AnalysisChartLayout";
import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";

interface ISkillFrequencyRankingProps extends IColorProps {}

const SkillFrequencyRanking = ({
  color = "primary",
}: ISkillFrequencyRankingProps) => {
  const { data, isLoading } = useGetSkillFrequencyQuery();

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <AnalysisChartLayout
      title="기술별 빈도 결과의 Rank에요! 기술을 클릭하고 NPM 다운로드 그래프를 함께 확인하세요!"
      className="my-10 border-b-[1px] border-t-[1px] border-gray3 py-10"
    >
      {data && <ChartRanking rankingData={data.data} color={color} />}
    </AnalysisChartLayout>
  );
};

export default SkillFrequencyRanking;

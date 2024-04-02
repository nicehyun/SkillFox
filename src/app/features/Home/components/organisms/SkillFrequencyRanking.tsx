import { ChartData, IColorProps } from "@/app/features/common/types";
import ChartRanking from "../molecules/ChartRanking";
import AnalysisChartLayout from "./AnalysisChartLayout";

interface ISkillFrequencyRankingProps extends IColorProps {}

const data = [
  { name: "Skill 1", value: 400 },
  { name: "Skill 2", value: 300 },
  { name: "Skill 3", value: 300 },
  { name: "Skill 4", value: 200 },
  { name: "Skill 5", value: 200 },
  { name: "Skill 6", value: 200 },
  { name: "Skill 7", value: 200 },
  { name: "Skill 8", value: 200 },
  { name: "Skill 9", value: 200 },
  { name: "Skill 10", value: 200 },
  { name: "Skill 11", value: 200 },
  { name: "Skill 12", value: 200 },
  { name: "Skill 13", value: 200 },
  { name: "Skill 14", value: 200 },
  { name: "Skill 15", value: 200 },
];

const SkillFrequencyRanking = ({
  color = "primary",
}: ISkillFrequencyRankingProps) => {
  return (
    <AnalysisChartLayout
      title="기술별 빈도 결과의 Rank에요! 기술을 클릭하고 NPM 다운로드 그래프를 함께 확인하세요!"
      className="my-10 border-b-[1px] border-t-[1px] border-gray3 py-10"
    >
      <ChartRanking rankingData={data} color={color} />
    </AnalysisChartLayout>
  );
};

export default SkillFrequencyRanking;

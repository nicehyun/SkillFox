import CustomRadarChart from "@/app/features/common/components/organisms/CustomRadarChart";
import AnalysisResultLayout from "./AnalysisChartLayout";
import { ChartData } from "@/app/features/common/types";
import { chartColor } from "@/app/features/common/utils/chart";

const SkillCombinationChart = () => {
  const skills = ["next.js", "React.js", "ReactQuery", "Redux", "taillwindCSS"];

  const chartData: ChartData[] = [
    {
      name: "스킬 1",
      value: 120,
    },
    {
      name: "스킬 2",
      value: 98,
    },
    {
      name: "스킬 3",
      value: 86,
    },
    {
      name: "스킬 4",
      value: 99,
    },
    {
      name: "스킬 5",
      value: 85,
    },
  ];

  return (
    <AnalysisResultLayout title="기술별 빈도 분석 결과의 상위 5개 기술과 함께 요구되는 기술 4개를 준비해봤어요!">
      <div className="grid h-[600px] grid-cols-3 sm:h-[1400px] sm:grid-cols-1 md:h-[1400px] md:grid-cols-1 lg:gap-4 xl:gap-4">
        {skills.map((skill, index) => (
          <CustomRadarChart
            id="combination"
            chartData={chartData}
            skill={skill}
            key={`chart-radar-${skill}__${index}`}
            fillColor={chartColor[index % chartColor.length]}
          />
        ))}
      </div>
    </AnalysisResultLayout>
  );
};

export default SkillCombinationChart;

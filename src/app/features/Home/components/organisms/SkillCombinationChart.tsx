import CustomRadarChart from "@/app/features/common/components/organisms/CustomRadarChart";
import AnalysisResultLayout from "./AnalysisChartLayout";

const SkillCombinationChart = () => {
  return (
    <AnalysisResultLayout title="기술 조합 분석">
      <CustomRadarChart id="combination" />
    </AnalysisResultLayout>
  );
};

export default SkillCombinationChart;

"use client";

import { IColorProps } from "@/app/features/common/types";
import AnalysisResultLayout from "./AnalysisChartLayout";
import CustomPieChart from "@/app/features/common/components/organisms/CustomPieChart";
import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";

interface ISkillFrequencyChartProps extends IColorProps {}

const SkillFrequencyChart = ({
  color = "primary",
}: ISkillFrequencyChartProps) => {
  const { data, isLoading } = useGetSkillFrequencyQuery();

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <>
      {data && (
        <AnalysisResultLayout
          title="채용 공고의 기술별 빈도를 나타낸 결과에요!"
          className="h-[350px]"
        >
          <CustomPieChart chartData={data} id="frequency" color={color} />
        </AnalysisResultLayout>
      )}
    </>
  );
};

export default SkillFrequencyChart;

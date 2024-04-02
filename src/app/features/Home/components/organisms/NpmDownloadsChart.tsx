"use client";

import AnalysisChartLayout from "./AnalysisChartLayout";
import CustomAreaChart from "@/app/features/common/components/organisms/CustomAreaChart";
import { useGetNpmDownloadsQuery } from "../../hooks/useGetNpmDownloadsQuery";
import { useAppSelector } from "@/redux/hooks";
import { selectNpmSkillState } from "@/redux/features/homeSlice";

const NpmDownloadsChart = () => {
  const { data } = useGetNpmDownloadsQuery();
  const skill = useAppSelector(selectNpmSkillState);

  return (
    <AnalysisChartLayout
      title="선택된 기술의 NPM 다운로드 변동 수치에요!"
      className="h-[400px]"
    >
      {data ? (
        <CustomAreaChart id="downloads" chartData={data} dataKey={skill} />
      ) : (
        <p>none data</p>
      )}
    </AnalysisChartLayout>
  );
};

export default NpmDownloadsChart;

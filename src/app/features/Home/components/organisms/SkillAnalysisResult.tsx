"use client";

import Panel from "@/app/features/common/components/organisms/Panel";
import SkillCombinationChart from "./SkillCombinationChart";
import SkillFrequencyChart from "./SkillFrequencyChart";
import IndustryFrequencyChart from "./IndustryFrequencyChart";
import SkillFrequencyRanking from "./SkillFrequencyRanking";
import NpmDownloadsChart from "./NpmDownloadsChart";

const SkillAnalysisResult = () => {
  const tabLabels = ["기술별 빈도 분석", "산업별 기술 분석", "기술 조합 분석"];

  const tabContents = [
    <>
      <SkillFrequencyChart color="secondary" />
      <SkillFrequencyRanking />
      <NpmDownloadsChart />
    </>,
    <IndustryFrequencyChart />,
    <SkillCombinationChart />,
  ];

  return (
    <Panel id="analysis" tabContents={tabContents} tabLabels={tabLabels} />
  );
};

export default SkillAnalysisResult;

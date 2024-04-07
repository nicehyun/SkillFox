"use client";

import Panel from "@/app/features/common/components/organisms/Panel";
import SkillCombinationChart from "./SkillCombinationChart";
import SkillFrequencyChart from "../../../../[classification]/skillFrequency/components/SkillFrequencyChart";
import IndustryFrequencyChart from "../../../../[classification]/industryFenquency/components/organisms/IndustryAnalysisChart";
import SkillFrequencyRanking from "../../../../[classification]/skillFrequency/components/organisms/SkillFrequencyRanking";
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

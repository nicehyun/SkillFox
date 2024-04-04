"use client";

import Panel from "@/app/features/common/components/organisms/Panel";
import SkillCombinationChart from "./SkillCombinationChart";
import SkillFrequencyChart from "./SkillFrequencyChart";
import IndustryFrequencyChart from "./IndustryFrequencyChart";
import SkillFrequencyRanking from "./SkillFrequencyRanking";
import NpmDownloadsChart from "./NpmDownloadsChart";
import { useEffect, useState } from "react";

const SkillAnalysisResult = () => {
  const tabLabels = ["기술별 빈도 분석", "산업별 기술 분석", "기술 조합 분석"];

  const [codeCounts, setCodeCounts] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/code-counts/")
      .then((response) => response.json())
      .then((data) => setCodeCounts(data))
      .catch((error) => console.error("Error fetching code counts:", error));
  }, []);

  console.log(codeCounts);

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

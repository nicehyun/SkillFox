"use client";

import { useEffect, useState } from "react";
import AnalysisResultLayout from "./AnalysisChartLayout";
import { useGetIndustryFrequencyQuery } from "../../hooks/useGetIndustryFrequencyQuery";
import { useGetJobTypeFrequencyQuery } from "../../hooks/useGetJobTypeFrequencyQuery";
import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";
import { useGetExperienceRangeFrequencyQuery } from "../../hooks/useGetExperienceRangeFrequencyQuery";
import { useGetRegionFrequencyQuery } from "../../hooks/useGetRegionFrequencyQuery";

const IndustryFrequencyChart = () => {
  // const { data, isError, error, isLoading } = useGetIndustryFrequencyQuery();
  // const { data, isError, error, isLoading } = useGetJobTypeFrequencyQuery();
  // const { data, isError, error, isLoading } = useGetEducationFrequencyQuery();
  // const { data, isError, error, isLoading } =
  // useGetExperienceRangeFrequencyQuery();
  const { data, isError, error, isLoading } = useGetRegionFrequencyQuery();

  const [industries, setIndustries] = useState([]); // API로부터 받은 데이터를 저장할 상태
  const [jobTypes, setJobTypes] = useState([]);

  console.log(data);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  if (isError) return <div>Error: {error.message}</div>;

  // useEffect(() => {
  //   // 컴포넌트가 마운트될 때 API 호출
  //   fetch("http://127.0.0.1:8000/api/job-type-frequency", {
  //     next: { revalidate: 0 },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json(); // 응답을 JSON 형태로 변환
  //       }
  //       throw new Error("Network response was not ok.");
  //     })
  //     .then((data) => {
  //       setJobTypes(data); // 상태 업데이트
  //     })
  //     .catch((error) => {
  //       console.error(
  //         "There has been a problem with your fetch operation:",
  //         error,
  //       );
  //     });
  // }, []);

  // console.log(jobTypes);
  return (
    <AnalysisResultLayout
      title="기술별 빈도 분석 결과의 상위 5개 기술의 산업별 빈도를 분석한 결과에요! (공통 산업 5개)"
      className="h-[400px] sm:h-[450px]"
    >
      <></>
      {/* <CustomLineChart id="industry" chartData={lineChartData} /> */}
    </AnalysisResultLayout>
  );
};

export default IndustryFrequencyChart;

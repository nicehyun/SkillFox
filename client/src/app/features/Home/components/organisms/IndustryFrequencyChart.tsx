"use client";

import { useEffect, useState } from "react";
import AnalysisResultLayout from "./AnalysisChartLayout";
import CustomLineChart from "@/app/features/common/components/organisms/CustomLineChart";

const lineChartData = [
  {
    xAxisLabel: "산업 1",
    linesData: [
      { name: "React", value: 1000 },
      { name: "Vue", value: 1398 },
      { name: "Angular", value: 2210 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1200 },
    ],
  },
  {
    xAxisLabel: "산업 2",
    linesData: [
      { name: "React", value: 2000 },
      { name: "Vue", value: 1598 },
      { name: "Angular", value: 810 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1000 },
    ],
  },

  {
    xAxisLabel: "산업 3",
    linesData: [
      { name: "React", value: 3000 },
      { name: "Vue", value: 1198 },
      { name: "Angular", value: 2510 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1400 },
    ],
  },

  {
    xAxisLabel: "산업 4",
    linesData: [
      { name: "React", value: 4000 },
      { name: "Vue", value: 998 },
      { name: "Angular", value: 1210 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1090 },
    ],
  },

  {
    xAxisLabel: "산업 5",
    linesData: [
      { name: "React", value: 5000 },
      { name: "Vue", value: 1098 },
      { name: "Angular", value: 3210 },
      { name: "Next.js", value: 1000 },
      { name: "React Query", value: 1800 },
    ],
  },
];

const IndustryFrequencyChart = () => {
  const [industries, setIndustries] = useState([]); // API로부터 받은 데이터를 저장할 상태
  const [jobTypes, setJobTypes] = useState([]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출
    fetch("http://127.0.0.1:8000/api/industry-frequency", {
      next: { revalidate: 0 },
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // 응답을 JSON 형태로 변환
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setIndustries(data); // 상태 업데이트
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      });
  }, []);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 API 호출
    fetch("http://127.0.0.1:8000/api/job-type-frequency", {
      next: { revalidate: 0 },
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // 응답을 JSON 형태로 변환
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setJobTypes(data); // 상태 업데이트
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error,
        );
      });
  }, []);

  console.log(jobTypes);
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

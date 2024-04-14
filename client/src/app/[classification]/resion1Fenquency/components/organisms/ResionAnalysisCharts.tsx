"use client";

import EducationAnalysisChart from "@/app/[classification]/educationFenquency/components/organisms/EducationAnalysisChart";

import { useGetResion1FrequencyQuery } from "../../hooks/useGetResion1FrequencyQuery";

const resionAnalysisCharts = () => {
  const { data, error, isError } = useGetResion1FrequencyQuery();
  return (
    <>
      {data?.data ? (
        data?.data.map((resionChart, index) => (
          <EducationAnalysisChart
            key={`education-chart__${index}`}
            id={`education__${index}`}
            chartTitle={resionChart.region}
            chartData={resionChart.skills.slice(0, 10)}
            className={index !== 0 ? "mt-8" : ""}
          />
        ))
      ) : (
        <>None Data</>
      )}
    </>
  );
};

export default resionAnalysisCharts;

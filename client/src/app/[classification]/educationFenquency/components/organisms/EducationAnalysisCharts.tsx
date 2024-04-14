import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";
import EducationAnalysisChart from "./EducationAnalysisChart";

const EducationAnalysisCharts = () => {
  const { data } = useGetEducationFrequencyQuery();

  // TODO : NoneData 추가하기
  return (
    <>
      {data?.data ? (
        data?.data.map((educationChart, index) => (
          <EducationAnalysisChart
            key={`education-chart__${index}`}
            id={`education__${index}`}
            chartTitle={educationChart.education}
            chartData={educationChart.skills.slice(0, 10)}
            className={index !== 0 ? "mt-8" : ""}
          />
        ))
      ) : (
        <>None Data</>
      )}
    </>
  );
};

export default EducationAnalysisCharts;

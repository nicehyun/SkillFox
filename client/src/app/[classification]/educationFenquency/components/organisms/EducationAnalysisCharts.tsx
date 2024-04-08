import { useGetEducationFrequencyQuery } from "../../hooks/useGetEducationFrequencyQuery";
import EducationAnalysisChart from "./EducationAnalysisChart";

const EducationAnalysisCharts = () => {
  const { data } = useGetEducationFrequencyQuery();

  const educationChartDatas = [
    {
      id: "none-education",
      key: "학력무관",
      title: "학력 무관 기술 분석",
    },
    {
      id: "highschool-above-education",
      key: "고등학교졸업이상",
      title: "고등학교 졸업 이상 기술 분석",
    },
    {
      id: "associate-degree-or-higher-education",
      key: "대학졸업(2,3년)이상",
      title: "대학교 졸업(2, 3년) 이상 기술 분석",
    },
    {
      id: "minimum-bachelors-education",
      key: "대학교졸업(4년)이상",
      title: "대학교 졸업(4년) 이상 기술 분석",
    },
    {
      id: "minimum-bachelors-education",
      key: "석사졸업이상",
      title: "석사 졸업 이상 기술 분석",
    },
  ];

  // TODO : NoneData 추가하기
  return (
    <>
      {data?.data &&
        educationChartDatas.map((chartData, index) => (
          <EducationAnalysisChart
            key={`education-chart-${chartData.id}__${index}`}
            id={chartData.id}
            chartTitle={chartData.title}
            chartData={data?.data[chartData.key]}
            className={index !== 0 ? "mt-8" : ""}
          />
        ))}
    </>
  );
};

export default EducationAnalysisCharts;

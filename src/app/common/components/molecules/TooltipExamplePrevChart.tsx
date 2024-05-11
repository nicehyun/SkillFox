import TooltipExampleChartLayout from "./TooltipExampleChartLayout";

const TooltipExamplePrevChart = () => {
  const examplePreviosDatas = [
    {
      value: 120,
      ChartColor: "bg-previosMonthChart1",
    },
    {
      value: 104,
      ChartColor: "bg-previosMonthChart2",
    },
    {
      value: 96,
      ChartColor: "bg-previosMonthChart3",
    },
    {
      value: 90,
      ChartColor: "bg-previosMonthChart4",
    },
    {
      value: 80,
      ChartColor: "bg-previosMonthChart5",
    },
  ];

  return (
    <TooltipExampleChartLayout
      id="prev"
      exampleChartDatas={examplePreviosDatas}
      skillName="react"
    />
  );
};

export default TooltipExamplePrevChart;

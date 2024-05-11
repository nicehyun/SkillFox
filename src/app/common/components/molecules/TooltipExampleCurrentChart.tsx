import TooltipExampleChartLayout from "./TooltipExampleChartLayout";

const TooltipExampleCurrentChart = () => {
  const exampleCurrentDatas = [
    {
      value: 150,
      ChartColor: "bg-currentMonthChart",
    },
  ];

  return (
    <TooltipExampleChartLayout
      id="current"
      exampleChartDatas={exampleCurrentDatas}
      skillName="react"
    />
  );
};

export default TooltipExampleCurrentChart;

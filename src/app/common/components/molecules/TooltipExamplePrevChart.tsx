import { getPreviousMonth } from "../../utils/date";

const TooltipExamplePrevChart = () => {
  const examplePreviosDatas = [
    {
      value: "120",
      color: "bg-previosMonthChart1",
    },
    {
      value: "104",
      color: "bg-previosMonthChart2",
    },
    {
      value: "96",
      color: "bg-previosMonthChart3",
    },
    {
      value: "90",
      color: "bg-previosMonthChart4",
    },
    {
      value: "80",
      color: "bg-previosMonthChart5",
    },
  ];

  return (
    <div className="flex items-center text-small">
      <span className="mr-4 text-black3">react</span>

      <ul className="flex grow flex-row-reverse">
        {examplePreviosDatas.map((prevData, index) => (
          <div className="grow">
            <span className="flexCenter text-black3">
              {getPreviousMonth(index + 1)}
            </span>
            <span
              className={`${prevData.color} flexCenter inline-block h-6 font-bold text-white`}
            >
              {prevData.value}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TooltipExamplePrevChart;

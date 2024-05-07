import { getPreviousMonth } from "../../utils/date";

const TooltipExampleCurrentChart = () => {
  return (
    <div className="flex items-center text-small">
      <span className="mr-4 text-black3">react</span>
      <div className="grow">
        <span className="flexCenter inline-block w-full text-black3">
          {getPreviousMonth(0)}
        </span>
        <span className="flexCenter inline-block h-6 w-full bg-currentMonthChart font-bold text-white">
          150
        </span>
      </div>
    </div>
  );
};

export default TooltipExampleCurrentChart;

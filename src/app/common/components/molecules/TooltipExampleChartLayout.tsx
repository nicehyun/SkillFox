import { getPreviousMonth } from "../../utils/date";

export type TooltipExampleChartData = {
  value: number;
  ChartColor: string;
};

export interface ITooltipExampleChartLayoutProps {
  id: "current" | "prev";
  skillName: string;
  exampleChartDatas: TooltipExampleChartData[];
}

const TooltipExampleChartLayout = ({
  id,
  skillName,
  exampleChartDatas,
}: ITooltipExampleChartLayoutProps) => {
  return (
    <div
      className="flex items-center text-small"
      role="img"
      aria-label={`${skillName}의 예시 빈도 분석`}
    >
      <span className="mr-4 text-black3">{skillName}</span>

      <ul className="flex grow flex-row-reverse">
        {exampleChartDatas.map((exampleChartData, index) => (
          <li
            className="grow"
            key={`example-chart-data-${id}__${index}`}
            aria-label={`Month ${getPreviousMonth(id === "current" ? index : index + 1)}: ${exampleChartData.value}건의 채용 공고`}
          >
            <span className="flexCenter text-black3">
              {getPreviousMonth(id === "current" ? index : index + 1)}
            </span>
            <span
              className={`${exampleChartData.ChartColor} flexCenter inline-block h-6 font-bold text-white`}
              aria-hidden="true"
            >
              {exampleChartData.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TooltipExampleChartLayout;

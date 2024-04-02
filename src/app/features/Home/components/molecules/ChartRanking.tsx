import { IColorProps } from "@/app/features/common/types";
import { textColorClasses } from "@/app/features/common/utils/classes";

interface IChartRankingProps extends IColorProps {
  rankingData: { name: string; value: number }[];
}

const ChartRanking = ({
  rankingData,
  color = "primary",
}: IChartRankingProps) => {
  return (
    <ul className={`grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2`}>
      {rankingData.map((data, index) => (
        <li
          key={`chart-ranking__${index}`}
          className={`${index <= 2 ? textColorClasses[color] : ""} sm:text-small md:text-small`}
        >
          <span>{index + 1} - </span> {data.name}
        </li>
      ))}
    </ul>
  );
};

export default ChartRanking;

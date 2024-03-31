import { Color } from "@/app/features/common/types";
import { borderColorClasses } from "@/app/features/common/utils/classes";

interface IchartRankingProps {
  color?: Color;
  rankingData: { name: string; value: number }[];
}

const ChartRanking = ({ rankingData, color }: IchartRankingProps) => {
  return (
    <ul
      className={`border-t-[2px] ${borderColorClasses[color === "primary" ? "secondary" : "primary"]} grid grid-cols-3 gap-4 border-t-[1px] pt-4 sm:grid-cols-2 md:grid-cols-2`}
    >
      {rankingData.map((data, index) => (
        <li
          key={`chart-ranking__${index}`}
          className={index <= 2 ? "text-primary" : ""}
        >
          <span>{index + 1} - </span> {data.name}
        </li>
      ))}
    </ul>
  );
};

export default ChartRanking;

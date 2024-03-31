import Icon from "@/app/features/common/components/atoms/Icon";
import { MdInsertChartOutlined } from "react-icons/md";

interface IChartTitleProps {
  title: string;
}

const ChartTitle = ({ title }: IChartTitleProps) => {
  return (
    <h3 className="flex">
      <Icon icon={<MdInsertChartOutlined />} />

      {title}
    </h3>
  );
};

export default ChartTitle;

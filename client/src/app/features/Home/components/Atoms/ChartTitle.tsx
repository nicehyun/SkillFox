import Icon from "@/app/features/common/components/atoms/Icon";
import { MdInsertChartOutlined } from "react-icons/md";

interface IChartTitleProps {
  title: string;
}

const ChartTitle = ({ title }: IChartTitleProps) => {
  return (
    <h3 className="flexCenter mb-10">
      <Icon icon={<MdInsertChartOutlined />} />

      <span className="flex-grow sm:text-small md:text-small">{title}</span>
    </h3>
  );
};

export default ChartTitle;

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LineChartData } from "../../types";
import { formatChartData, getMaxValueFromChartData } from "../../utils/chart";

export interface ICustomAreaChartProps {
  id: string;
  chartData: LineChartData[];
  dataKey: string | null;
}

const CustomAreaChart = ({ chartData, id, dataKey }: ICustomAreaChartProps) => {
  if (dataKey === null) {
    return <p>기술을 선택해주세요.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height="100%" id={`chart-area-${id}`}>
      <AreaChart
        width={500}
        height={400}
        data={formatChartData(chartData)}
        margin={{ top: 10, right: 5, left: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xAxisLabel" tick={{ fontSize: 12 }} />
        <YAxis
          domain={[0, getMaxValueFromChartData(chartData)]}
          tick={{ fontSize: 12 }}
        />
        <Tooltip />
        <Legend />

        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#F2994A"
          fill="#F2994A"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;

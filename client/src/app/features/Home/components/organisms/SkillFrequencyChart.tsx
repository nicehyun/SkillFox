"use client";

import { IColorProps } from "@/app/features/common/types";
import AnalysisResultLayout from "./AnalysisChartLayout";
import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartColor } from "@/app/features/common/utils/chart";
import { Payload } from "recharts/types/component/DefaultTooltipContent";

interface ISkillFrequencyChartProps extends IColorProps {}

const getIntroOfPage = (label) => {
  if (label === "Page A") {
    return "Page A is about men's clothing";
  }
  if (label === "Page B") {
    return "Page B is about women's dress";
  }
  if (label === "Page C") {
    return "Page C is about women's bag";
  }
  if (label === "Page D") {
    return "Page D is about household goods";
  }
  if (label === "Page E") {
    return "Page E is about food";
  }
  if (label === "Page F") {
    return "Page F is about baby food";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }

  return null;
};

const SkillFrequencyChart = ({
  color = "primary",
}: ISkillFrequencyChartProps) => {
  const { data, isLoading } = useGetSkillFrequencyQuery();

  // console.log(data);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <>
      {data && (
        <AnalysisResultLayout
          title="채용 공고의 기술별 빈도를 나타낸 결과에요!"
          className="h-[1800px]"
        >
          <></>
          {/* <ResponsiveContainer height="100%" id={`chart-bar-`}>
            <BarChart
              height={300}
              data={data}
              layout="vertical"
              margin={{
                top: 20,
                right: 30,
                left: 50,
                bottom: 5,
              }}
            >
              <XAxis hide type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip content={<CustomTooltip />} />

              <Bar dataKey="value" fill={chartColor[0]}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={chartColor[index % chartColor.length]}
                    fillOpacity={0.7}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer> */}
        </AnalysisResultLayout>
      )}
    </>
  );
};

export default SkillFrequencyChart;

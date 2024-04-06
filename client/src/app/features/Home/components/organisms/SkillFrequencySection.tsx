"use client";

import Icon from "@/app/features/common/components/atoms/Icon";
import { useGetSkillFrequencyQuery } from "../../hooks/useGetSkillFrequencyQuery";

import { FaRegQuestionCircle } from "react-icons/fa";
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import Button from "@/app/features/common/components/atoms/Button";

import { FaAngleDown, FaAngleUp, FaChevronDown } from "react-icons/fa6";

const CustomBarShape = ({ fill, x, y, width, height }: any) => {
  return (
    <rect x={x} y={y} width={width} height={height} fill={fill} rx="5" ry="5" />
  );
};

const CustomYAxisTick = ({ x, y, payload, index }: any) => {
  const isTopTen = index < 10;
  return (
    <text
      x={x}
      y={y}
      fontSize={14}
      textAnchor="end"
      fill="#333"
      fontWeight={isTopTen ? "bold" : "normal"}
      dominantBaseline="middle"
    >
      {payload.value}
    </text>
  );
};

const SkillFrequencySection = () => {
  const { data, isLoading, error, isError } = useGetSkillFrequencyQuery();

  console.log(data);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  //   if (isError) return <div>Error: {error.message}</div>;

  const renderCustomLabel = (props: any) => {
    const { x, y, width, value } = props;

    return (
      <text
        x={x + width - 40}
        y={y}
        dy={parseInt(props.viewBox.height) / 2 + 4}
        fontSize="12"
        fontWeight={700}
        fill="#666"
        textAnchor="start"
      >
        {`${((value / (data?.count ?? 0)) * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <section>
      <div className="mb-2 flex items-center">
        <h1 className="mr-2 text-medium font-bold sm:text-normal md:text-normal">
          기술 빈도 분석
        </h1>
        <span className="inline-block hover:cursor-pointer">
          {/* TODO :  FaAngleUp */}
          <Icon
            icon={<FaRegQuestionCircle />}
            size="small"
            className="text-gray1"
          />
        </span>
      </div>

      <div className="mb-14 flex items-center">
        <span className="text-small">
          채용 공고 {data?.count}건을 분석한 결과입니다.
        </span>

        <span className="inline-block hover:cursor-pointer">
          <Icon
            icon={<FaRegQuestionCircle />}
            size="small"
            className="text-gray1"
          />
        </span>
      </div>

      <div className="flex justify-end">
        <span className="bg-border text-xs right-0 top-[-40px] mb-2 flex items-center rounded-[5px] p-2">
          표시 중인 기술 <span className="ml-2 font-bold">50</span>
          <Icon icon={<FaChevronDown />} className="ml-2" />
        </span>
      </div>

      <div className="border-border h-[1600px] rounded-[5px] border-[2px] bg-primary py-2">
        <ResponsiveContainer width="100%" height="100%" id={`chart-bar-`}>
          <BarChart
            barSize={25}
            data={data?.data}
            layout="vertical"
            margin={{
              top: 20,
              // right: 50,
              left: 80,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="#F2994A" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#fff" stopOpacity={0.8} />
              </linearGradient>
            </defs>

            <XAxis hide type="number" />

            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              tick={<CustomYAxisTick />}
            />

            <Bar
              dataKey="value"
              fill="url(#colorGradient)"
              shape={<CustomBarShape />}
            >
              <LabelList
                dataKey="value"
                position="right"
                style={{ fontSize: "12px" }}
                content={renderCustomLabel}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default SkillFrequencySection;

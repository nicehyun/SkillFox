"use client";

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { Color } from "../../types";

interface ICustomRadarChartProps {
  id: string;
  color?: Color;
}

const skills = ["next1.js", "next2.js", "next3.js", "next4.js", "next5.js"];

const data = [
  {
    subject: "Math",
    A: 120,
  },
  {
    subject: "Chinese",
    A: 98,
  },
  {
    subject: "English",
    A: 86,
  },
  {
    subject: "Geography",
    A: 99,
  },
  {
    subject: "Physics",
    A: 85,
  },
];

const CustomRadarChart = ({ id }: ICustomRadarChartProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2">
      {skills.map((skill, index) => (
        <RadarChart
          id={`chart-radar__${id}`}
          outerRadius={60}
          width={300}
          height={200}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: "12px" }} />
          <PolarRadiusAxis angle={18} domain={[0, 150]} />
          <Radar
            name={skill}
            dataKey="A"
            stroke="#F2994A"
            fill="#F2994A"
            fillOpacity={0.6}
          />

          <Legend />
        </RadarChart>
      ))}
    </div>
  );
};

export default CustomRadarChart;

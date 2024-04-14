"use client";

import ChartLayout from "@/app/common/components/atoms/ChartLayout";
import DownloadPDFButton from "@/app/common/components/atoms/DownloadPDFButton";
import { RegionChartData } from "@/app/common/types";
import { Cell, Pie, PieChart } from "recharts";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

interface IJopTypeAnalysisChartProps {
  chartData: RegionChartData[];
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const geoUrl = "path_to_your_korea_geojson_data";

const coordinates = {
  경기: [37.275119, 127.009466],
  서울: [37.566535, 126.977969],
  대전: [36.350412, 127.384548],
  대구: [35.871435, 128.601445],
  부산: [35.179554, 129.075642],
  인천: [37.456255, 126.705206],
  울산: [35.538377, 129.31136],
};

const JopTypeAnalysisChart = ({ chartData }: IJopTypeAnalysisChartProps) => {
  const center = [51.505, -0.09];
  return (
    <ChartLayout className="h-auto">
      <div className="mb-2 flex justify-end px-4">
        <span>
          <DownloadPDFButton id="chart-radar-jop-type-Frenquency" />
        </span>
      </div>

      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {chartData.map(({ region, skills }) => {
          const position = coordinates[region]; // region에 따른 좌표를 가져옴
          if (!position) return null; // 좌표가 없는 지역은 표시하지 않음

          return (
            <Marker key={region} coordinates={position}>
              <PieChart width={200} height={150}>
                <Pie
                  data={skills}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                  label // 파이 차트 조각에 라벨을 표시
                />
              </PieChart>
            </Marker>
          );
        })}
      </ComposableMap>
    </ChartLayout>
  );
};

export default JopTypeAnalysisChart;

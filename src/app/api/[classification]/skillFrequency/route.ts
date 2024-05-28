import {
  BarChartData,
  MonthlyChartData,
  ResponseChartData,
} from "@/app/common/types";
import { extractMonthArray } from "@/app/common/utils/charData";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { classification: string } },
) {
  const { classification } = params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BE_URL}/api/skill-frequency/?classification=${classification}`,
      {
        next: { revalidate: 60 * 60 * 24 * 7 },
        // next: { revalidate: 0 },
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();

      return new NextResponse(JSON.stringify(errorResponse), {
        status: response.status,
      });
    }

    const data = await response.json();
    const monthlyChartData: MonthlyChartData[] = data.data;
    const colors = [
      "#008FFB",
      "#00E396",
      "#FEB019",
      "#FF4560",
      "#775DD0",
      "#F46036",
    ];

    const [currentMonth, ...prevMonths] = extractMonthArray(monthlyChartData);
    const skillNames = monthlyChartData.map((skill) => skill.name);

    // Data for previous months chart
    const previousMonthsData: BarChartData = {
      labels: skillNames,
      datasets: prevMonths
        .map((month, index) => ({
          label: `${month}월`,
          data: monthlyChartData.map((chartData) => {
            const monthData = chartData.months_value.find((monthlyValue) =>
              monthlyValue.hasOwnProperty(month),
            );
            return monthData ? monthData[month] : 0;
          }),
          backgroundColor: colors[index],
          stack: "previous",
        }))
        .reverse(),
    };

    const currentMonthData: BarChartData = {
      labels: skillNames,
      datasets: [
        {
          label: `${currentMonth}월`,
          data: monthlyChartData.map((chartData) => {
            const monthData = chartData.months_value.find((monthlyValue) =>
              monthlyValue.hasOwnProperty(currentMonth),
            );
            return monthData ? monthData[currentMonth] : 0;
          }),
          backgroundColor: colors[5],
          stack: "current",
        },
      ],
    };

    const combinedChartData: ResponseChartData = {
      count: data.count,
      labels: skillNames,
      datasets: [...previousMonthsData.datasets, ...currentMonthData.datasets],
    };

    return new NextResponse(JSON.stringify(combinedChartData), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch skill frequency analysis data:", error);

    return new NextResponse(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500 },
    );
  }
}

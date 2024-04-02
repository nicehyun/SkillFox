import { NpmDownloads } from "@/app/features/Home/types";
import { LineChartData } from "@/app/features/common/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { skill: string } },
) {
  const now = new Date();

  // endDate를 전월의 마지막 날로 설정
  const endYear = now.getFullYear();
  const endMonth = now.getMonth(); // JavaScript에서 월은 0부터 시작하므로 현재 월이 됨
  const endDate = new Date(endYear, endMonth, 0);

  const startYear = endDate.getFullYear() - 1;
  const startMonth = endDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1을 해줌
  const startDate = new Date(startYear, startMonth, endDate.getDate());

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const npmApiUrl = `https://api.npmjs.org/downloads/range/${formatDate(startDate)}:${formatDate(endDate)}/${params.skill}`;

  try {
    const response = await fetch(npmApiUrl, {
      next: { revalidate: 0 },
    }).then((res) => res.json());

    const monthlyData: Record<string, number> = {};

    response.downloads.forEach((download: NpmDownloads) => {
      const yearAndMonth = download.day.slice(2, 7);

      if (monthlyData[yearAndMonth]) {
        monthlyData[yearAndMonth] += download.downloads;
      } else {
        monthlyData[yearAndMonth] = download.downloads;
      }
    });

    const processedChartData: LineChartData[] = Object.keys(monthlyData).map(
      (yearAndMonth) => ({
        xAxisLabel: yearAndMonth,
        linesData: [
          {
            name: params.skill,
            value: monthlyData[yearAndMonth],
          },
        ],
      }),
    );

    return NextResponse.json(processedChartData, { status: 200 });
  } catch (error: unknown) {
    throw error;
  }
}

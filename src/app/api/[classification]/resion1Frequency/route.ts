import {
  RegionBarChartData,
  RegionChartData,
  ResponseSeveralChartData,
} from "@/app/common/types";
import { formatMonthlyChartData } from "@/app/common/utils/charData";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { classification: string } },
) {
  const { classification } = params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BE_URL}/api/region1-frequency/?classification=${classification}`,
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
    const regionChartData: RegionChartData[] = data.data;

    const formattedMonthlyChartData: ResponseSeveralChartData<RegionBarChartData> =
      {
        count: data.count,
        chartData: regionChartData.map((region) => {
          return {
            region: region.region,
            ...formatMonthlyChartData(region.data),
          };
        }),
      };

    return new NextResponse(JSON.stringify(formattedMonthlyChartData), {
      status: 200,
    });
  } catch (error) {
    console.error("Failed to fetch region frequency analysis data:", error);

    return new NextResponse(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500 },
    );
  }
}

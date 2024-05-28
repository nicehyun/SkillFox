import {
  EducationBarChartData,
  EducationChartData,
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
      `${process.env.NEXT_PUBLIC_BE_URL}/api/education-frequency/?classification=${classification}`,
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

    const educationChartData: EducationChartData[] = data.data;

    const formattedMonthlyChartData: ResponseSeveralChartData<EducationBarChartData> =
      {
        count: data.count,
        chartData: educationChartData.map((education) => {
          return {
            education: education.education,
            ...formatMonthlyChartData(education.data),
          };
        }),
      };

    return new NextResponse(JSON.stringify(formattedMonthlyChartData), {
      status: 200,
    });
  } catch (error) {
    console.error("Failed to fetch education frequency analysis data:", error);

    return new NextResponse(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500 },
    );
  }
}

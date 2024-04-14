import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { classification: string } },
) {
  const { classification } = params;

  console.log("api route");
  const experienceMin = request.headers.get("experienceMin");
  const experienceMax = request.headers.get("experienceMax");

  const fommattedExperienceMinPath = `&experience-min${experienceMin ? `=${experienceMin}` : ""}`;
  const fommattedExperienceMaxPath = `&experience-max${experienceMax ? `=${experienceMax}` : ""}`;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BE_URL}/api/experience-range-frequency/?classification=${classification}${fommattedExperienceMinPath}${fommattedExperienceMaxPath}`,
      {
        next: { revalidate: 0 },
      },
    );

    if (!response.ok) {
      const errorResponse = await response.json();

      return new NextResponse(JSON.stringify(errorResponse), {
        status: response.status,
      });
    }

    const data = await response.json();

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500 },
    );
  }
}

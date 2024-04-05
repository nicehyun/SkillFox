import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/skill-counts/`,
    ).then((res) => res.json());

    return NextResponse.json(response.slice(0, 50), { status: 200 });
  } catch (error: unknown) {
    throw error;
  }
}

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // TODO : classification 동적으로 받기
    const response = await fetch(
      `http://127.0.0.1:8000/api/skill-frequency/?classification=BE`,
      {
        next: { revalidate: 0 },
      },
    );

    if (!response.ok) {
      // 백엔드에서 반환된 HTTP 상태 코드가 에러를 나타내는 경우
      const errorResponse = await response.json(); // 에러 메시지 파싱

      // 에러 상태와 함께 에러 메시지를 클라이언트에 반환
      return new NextResponse(JSON.stringify(errorResponse), {
        status: response.status,
      });
    }

    const data = await response.json();

    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    // 네트워크 에러 등 기타 예외 처리
    return new NextResponse(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500 },
    );
  }
}

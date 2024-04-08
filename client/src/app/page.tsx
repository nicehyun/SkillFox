import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Link href="/FE/skillFrequency">프론트엔드</Link>
      <Link href="/BE/skillFrequency">백엔드・서버</Link>
      <Link href="/DE/skillFrequency">데이터 엔지니어</Link>
      <Link href="/DA/skillFrequency">데이터 분석가</Link>
      <Link href="/ML/skillFrequency">머신러닝 엔지니어</Link>
    </section>
  );
}

import Link from "next/link";

export default function Home() {
  const links = [
    {
      id: "FE",
      content: "프론트엔드",
    },
    {
      id: "BE",
      content: "백엔드・서버",
    },
    {
      id: "DE",
      content: "데이터 엔지니어",
    },
    {
      id: "DA",
      content: "데이터 분석가",
    },
    {
      id: "ML",
      content: "머신러닝 엔지니어",
    },
  ];
  return (
    <section className="flex flex-col">
      {links.map((link, index) => (
        <Link
          key={`link-${link.id}`}
          className={`${index !== 0 ? "mt-6" : ""} flexCenter w-full rounded-[5px] border-[2px] border-orange py-4 font-bold shadow`}
          href={`/${link.id}/skillFrequency`}
        >
          {link.content}
        </Link>
      ))}
    </section>
  );
}

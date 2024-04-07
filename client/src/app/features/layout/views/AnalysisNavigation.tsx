import Link from "next/link";

const AnalysisNavigation = () => {
  const links = [
    { href: "/FE/skillFrequency", content: "기술 빈도 분석" },
    { href: "/FE/industryFenquency", content: "산업별 분석" },
    { href: "/", content: "근무형태별 분석" },
    { href: "/", content: "학력별 분석" },
    { href: "/", content: "경력별 분석" },
  ];

  return (
    <nav
      aria-label="분석 선택"
      className="fixed left-[48px] top-[80px] z-20 h-screen py-2"
    >
      <ul>
        {links.map((link, index) => (
          <li
            key={`analysis-${index}`}
            className="hover:text:black1 w-[200px] text-small text-black3 transition duration-100 hover:bg-border hover:font-bold hover:text-black1"
          >
            {/* // TODO : aria-current 추가하기 */}
            <Link className="inline-block p-2" href={link.href}>
              {link.content}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AnalysisNavigation;

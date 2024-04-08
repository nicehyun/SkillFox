"use client";

import Link from "next/link";
import { useGetClassification } from "../../common/hooks/useGetClassification";
import { usePathname } from "next/navigation";

const AnalysisNavigation = () => {
  const pathname = usePathname();
  const { classification } = useGetClassification();

  console.log(pathname);

  const links = [
    { href: `/skillFrequency`, content: "기술 빈도 분석" },
    { href: `/industryFenquency`, content: "산업별 분석" },
    {
      href: `/jopTypeFenquency`,
      content: "근무 형태별 분석",
    },
    { href: `/educationFenquency`, content: "학력별 분석" },
    {
      href: `/experienceRangeFenquency`,
      content: "경력별 분석",
    },
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
            className={`hover:text:black1 w-[200px] ${pathname === `/${classification}${link.href}` ? "bg-orange/30 font-bold text-black1" : "transition duration-100 hover:bg-border hover:font-bold hover:text-black1"} text-small text-black3 `}
          >
            {/* // TODO : aria-current 추가하기 */}
            <Link
              className={`inline-block w-full p-2 `}
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/${classification}/${link.href}`}
            >
              {link.content}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AnalysisNavigation;

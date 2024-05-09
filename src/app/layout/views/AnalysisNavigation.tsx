"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectShowNavigationState } from "@/redux/features/layoutSlice";
import { useGetClassification } from "@/app/common/hooks/useGetClassification";

const AnalysisNavigation = () => {
  const showNavigationState = useAppSelector(selectShowNavigationState);
  const pathname = usePathname();
  const { classification } = useGetClassification();

  const links = [
    { href: `/skillFrequency`, content: "기술 빈도 분석" },

    {
      href: `/resion1Fenquency`,
      content: "지역별 분석",
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
      className={`${showNavigationState ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-x-full opacity-0"} fixed left-[0px] top-[80px] z-20 h-screen w-[300px] bg-white py-2 shadow transition-all duration-300 ease-in-out sm:w-full`}
    >
      <ul>
        {links.map((link, index) => (
          <li
            key={`analysis-${index}`}
            className={`hover:text:black1  ${pathname === `/${classification}${link.href}` ? "bg-orange/20 font-bold text-black1" : "transition duration-100 hover:bg-border hover:font-bold hover:text-black1"} text-small text-black3 `}
          >
            <Link
              className={`inline-block w-full p-2`}
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/${classification}/${link.href}`}
              aria-current={
                pathname ===
                `${process.env.NEXT_PUBLIC_BASE_URL}/${classification}${link.href}`
                  ? "page"
                  : undefined
              }
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

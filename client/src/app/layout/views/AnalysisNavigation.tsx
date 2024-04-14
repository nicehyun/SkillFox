"use client";

import Link from "next/link";
import { useGetClassification } from "../../common/hooks/useGetClassification";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectShowNavigationState } from "@/redux/features/layoutSlice";

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
      className={`${showNavigationState ? "pointer-events-auto opacity-100 " : "pointer-events-none opacity-0 sm:-translate-y-full md:-translate-y-full lg:-translate-x-full  xl:-translate-x-full"} fixed top-[80px] z-20  bg-secondary py-2 transition-all duration-300 ease-in-out sm:top-[128px] sm:w-screen md:top-[128px] md:w-screen lg:left-[64px] lg:h-screen xl:left-[64px] xl:h-screen `}
    >
      <ul>
        {links.map((link, index) => (
          <li
            key={`analysis-${index}`}
            className={`hover:text:black1 w-full lg:w-[200px] xl:w-[200px] ${pathname === `/${classification}${link.href}` ? "bg-orange/20 font-bold text-black1" : "transition duration-100 hover:bg-border hover:font-bold hover:text-black1"} text-small text-black3 `}
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

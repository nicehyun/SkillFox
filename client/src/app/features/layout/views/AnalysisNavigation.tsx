"use client";

import Link from "next/link";
import { useGetClassification } from "../../common/hooks/useGetClassification";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  hideNavigation,
  selectShowNavigationState,
} from "@/redux/features/layoutSlice";

const AnalysisNavigation = () => {
  const showNavigationState = useAppSelector(selectShowNavigationState);
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { classification } = useGetClassification();

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
      className={`${showNavigationState ? "pointer-events-auto translate-x-0 opacity-100" : "pointer-events-none -translate-x-full opacity-0"} fixed left-[48px] top-[80px] z-20 h-screen py-2 transition-all duration-300 ease-in-out`}
    >
      <ul>
        {links.map((link, index) => (
          <li
            key={`analysis-${index}`}
            className={`hover:text:black1 w-[200px] ${pathname === `/${classification}${link.href}` ? "bg-orange/20 font-bold text-black1" : "transition duration-100 hover:bg-border hover:font-bold hover:text-black1"} text-small text-black3 `}
          >
            <Link
              className={`inline-block w-full p-2`}
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/${classification}/${link.href}`}
              onClick={() => dispatch(hideNavigation())}
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

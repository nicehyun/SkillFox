"use client";

import { usePathname } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { selectShowNavigationState } from "@/redux/features/layoutSlice";
import { useGetClassification } from "@/app/common/hooks/useGetClassification";
import NavigationMenu from "../molecules/NavigationMenu";

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
      id="navigation-analysis-menu"
      className={`${showNavigationState ? "pointer-events-auto opacity-100" : "pointer-events-none -translate-x-full opacity-0"} fixed left-[0px] top-[80px] z-20 h-screen w-[300px] bg-white py-2 shadow transition-all duration-300 ease-in-out sm:w-full`}
    >
      <NavigationMenu
        links={links}
        classification={classification}
        currentPath={pathname}
      />
    </nav>
  );
};

export default AnalysisNavigation;

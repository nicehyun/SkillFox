"use client";

import { ReactNode } from "react";
import RouteNavigation from "../layout/views/AnalysisNavigationController";
import AnalysisNavigationController from "../layout/views/AnalysisNavigationController";
import { useAppSelector } from "@/redux/hooks";
import { selectShowNavigationState } from "@/redux/features/layoutSlice";
import AnlaysisNavigationProvider from "../common/utils/AnlaysisNavigationProvider";

const AnalysisLayout = ({ children }: { children: ReactNode }) => {
  const showNavigationState = useAppSelector(selectShowNavigationState);
  return (
    <>
      <AnalysisNavigationController />
      <RouteNavigation />
      <AnlaysisNavigationProvider>
        <div
          className={`${showNavigationState ? "sm:pt-[240px] md:pt-[240px] lg:pl-[288px] xl:pl-[288px]" : "sm:pt-[48px] md:pt-[48px] lg:pl-20 xl:pl-20"} px-4 pr-10 transition-all duration-300 ease-in-out`}
        >
          {children}
        </div>
      </AnlaysisNavigationProvider>
    </>
  );
};

export default AnalysisLayout;

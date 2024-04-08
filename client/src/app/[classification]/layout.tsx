"use client";

import { ReactNode } from "react";
import RouteNavigation from "../features/layout/views/AnalysisNavigationController";
import AnalysisNavigationController from "../features/layout/views/AnalysisNavigationController";
import { useAppSelector } from "@/redux/hooks";
import { selectShowNavigationState } from "@/redux/features/layoutSlice";

const AnalysisLayout = ({ children }: { children: ReactNode }) => {
  const showNavigationState = useAppSelector(selectShowNavigationState);
  return (
    <>
      <AnalysisNavigationController />
      <RouteNavigation />
      <div
        className={`${showNavigationState ? "pl-[288px]" : "pl-18"} pr-10 transition-all duration-300 ease-in-out`}
      >
        {children}
      </div>
    </>
  );
};

export default AnalysisLayout;

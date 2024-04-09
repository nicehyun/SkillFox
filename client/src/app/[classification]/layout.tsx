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
          className={`${showNavigationState ? "pl-[288px]" : "pl-18"} pr-10 transition-all duration-300 ease-in-out`}
        >
          {children}
        </div>
      </AnlaysisNavigationProvider>
    </>
  );
};

export default AnalysisLayout;

"use client";

import { IoBarChart } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  isShowNavigationState,
  toggleShowNavigation,
} from "@/redux/features/layoutSlice";
import IconButton from "@/app/common/components/atoms/IconButton";

const AnalysisNavigationController = () => {
  const isShowNavigation = useAppSelector(isShowNavigationState);
  const dispatch = useAppDispatch();

  return (
    <IconButton
      iconSize="large"
      ariaLabel="navigation toggle"
      ariaControls="navigation-analysis-menu"
      ariaExpanded={isShowNavigation}
      icon={<IoBarChart />}
      id="button-navigation-controller"
      onClick={() => dispatch(toggleShowNavigation())}
      className={`flexCenter ${isShowNavigation ? "bg-orange/20 text-black3" : "hover:bg-border"} h-[32px] w-[32px] rounded-[5px] transition duration-100`}
    />
  );
};

export default AnalysisNavigationController;

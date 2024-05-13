"use client";

import { IoBarChart } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectShowNavigationState,
  toggleShowNavigation,
} from "@/redux/features/layoutSlice";
import IconButton from "@/app/common/components/atoms/IconButton";

const AnalysisNavigationController = () => {
  const showNavigationState = useAppSelector(selectShowNavigationState);
  const dispatch = useAppDispatch();

  return (
    <IconButton
      iconSize="large"
      ariaLabel="navigation toggle"
      ariaControls="navigation-analysis-menu"
      ariaExpanded={showNavigationState}
      icon={<IoBarChart />}
      id="button-navigation-controller"
      onClick={() => dispatch(toggleShowNavigation())}
      className={`flexCenter ${showNavigationState ? "bg-orange/20 text-black3" : "hover:bg-border"} h-[32px] w-[32px] rounded-[5px] transition duration-100`}
    />
  );
};

export default AnalysisNavigationController;

"use client";

import Icon from "../../common/components/atoms/Icon";
import { IoBarChart } from "react-icons/io5";
import AnalysisNavigation from "./AnalysisNavigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectShowNavigationState,
  toggleShowNavigation,
} from "@/redux/features/layoutSlice";

const AnalysisNavigationController = () => {
  const showNavigationState = useAppSelector(selectShowNavigationState);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        aria-label="직무 선택"
        className="fixed top-[80px] z-20 h-screen border-r-[1px] border-border py-2"
      >
        <button
          onClick={() => dispatch(toggleShowNavigation())}
          className={`flexCenter ${showNavigationState ? "bg-orange/20 text-black3" : "hover:bg-border"} mx-2 h-[32px] w-[32px] rounded-[5px] transition duration-100`}
        >
          <Icon icon={<IoBarChart />} size="large" />
        </button>
      </div>

      <AnalysisNavigation />
    </>
  );
};

export default AnalysisNavigationController;

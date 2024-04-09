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
        className={`fixed top-[80px] z-20 bg-secondary px-4 py-2 sm:h-auto sm:w-screen md:h-auto md:w-screen`}
      >
        <button
          onClick={() => dispatch(toggleShowNavigation())}
          className={`flexCenter ${showNavigationState ? "bg-orange/20 text-black3" : "hover:bg-border"} h-[32px] w-[32px] rounded-[5px] transition duration-100`}
        >
          <Icon icon={<IoBarChart />} size="large" />
        </button>
      </div>

      <AnalysisNavigation />
    </>
  );
};

export default AnalysisNavigationController;

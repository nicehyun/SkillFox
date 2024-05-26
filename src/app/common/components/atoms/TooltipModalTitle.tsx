"use client";

import { currentTooltipPageState } from "@/redux/features/layoutSlice";
import { useAppSelector } from "@/redux/hooks";

const TooltipModalTitle = () => {
  const currentTooltipPage = useAppSelector(currentTooltipPageState);

  const handleTooltipModalTitle = () => {
    switch (currentTooltipPage) {
      case 1:
        return "";

      case 2:
        return "지역별";

      case 3:
        return "학력별";

      case 4:
        return "경력별";

      default:
        "";
    }
  };
  return (
    <h3 className="mb-6 mt-6 font-bold">
      🚀 {handleTooltipModalTitle()} 기술 빈도 분석
    </h3>
  );
};

export default TooltipModalTitle;

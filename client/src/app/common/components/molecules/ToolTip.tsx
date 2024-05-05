"use client";

import React, { useState } from "react";
import Icon from "../atoms/Icon";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useAppDispatch } from "@/redux/hooks";
import { showTooltipModal } from "@/redux/features/layoutSlice";

interface IToolTipProps {
  title: string;
  guideContent: React.ReactNode;
  ariaLabel: string;
}

const ToolTipButton = ({ title, guideContent, ariaLabel }: IToolTipProps) => {
  const dispatch = useAppDispatch();

  return (
    <section className="relative">
      <button
        onClick={() => dispatch(showTooltipModal())}
        aria-label={ariaLabel}
        aria-haspopup="true"
        aria-controls="tooltip-content"
      >
        <Icon
          icon={<FaRegQuestionCircle />}
          size="small"
          className="text-gray1"
        />
      </button>
    </section>
  );
};

export default ToolTipButton;

"use client";

import React, { useState } from "react";
import Icon from "../atoms/Icon";
import { FaRegQuestionCircle } from "react-icons/fa";

interface IToolTipProps {
  title: string;
  guideContent: React.ReactNode;
  ariaLabel: string;
}

const ToolTip = ({ title, guideContent, ariaLabel }: IToolTipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className="relative">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
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
      {isVisible && (
        <div
          id="tooltip-content"
          role="tooltip"
          className="absolute left-0 z-30 w-[500px] rounded-[5px] border-[1px] border-border bg-primary p-2 text-small text-black2 shadow sm:fixed sm:left-0 sm:right-0 sm:mx-auto sm:w-3/4 md:fixed md:left-0 md:right-0 md:mx-auto md:w-3/4 "
        >
          <h3 className="mb-6 font-bold">🚀 {title}</h3>

          <p>{guideContent}</p>
        </div>
      )}
    </section>
  );
};

export default ToolTip;

"use client";

import { useState } from "react";
import { Color } from "../types";
import { bgColorClasses, textColorClasses } from "../utils/classes";

interface ITabsProps {
  tabLabels: string[];
  tabsValue: number;
  onChangeTabs: (newValue: number) => void;
  id: string;
  color?: Color;
}

const Tabs = ({
  tabLabels,
  id,
  onChangeTabs,
  tabsValue,
  color = "primary",
}: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(tabsValue);
  const [sliderStyle, setSliderStyle] = useState(
    calculateSliderStyle(tabsValue),
  );

  function calculateSliderStyle(index: number) {
    const sliderWidth = 100 / tabLabels.length;
    const sliderOffset = index * sliderWidth;
    return {
      left: `${sliderOffset}%`,
      width: `${sliderWidth}%`,
    };
  }

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onChangeTabs(index);
    setSliderStyle(calculateSliderStyle(index));
  };

  return (
    <nav className="relative" aria-label="Tab navigation">
      <ul className="flex border-b-[2px] border-gray3">
        {tabLabels.map((label, index) => (
          <li key={`${id}-tab-${index}`} className="flexCenter flex-grow">
            <button
              data-cy={`tab-button-${index}`}
              onClick={() => handleTabClick(index)}
              className={`py-2 text-normal sm:text-small md:text-small ${
                activeTab === index
                  ? `font-bold ${textColorClasses[color]}`
                  : "text-gray2"
              }`}
              aria-selected={activeTab === index ? "true" : "false"}
              role="tab"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      <div
        className={`${bgColorClasses[color]} absolute bottom-0 h-[2px] transition-all`}
        style={sliderStyle}
      ></div>
    </nav>
  );
};

export default Tabs;

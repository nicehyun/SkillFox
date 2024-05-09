import React, { ReactElement } from "react";
import Icon, { IconSize } from "./Icon";

export interface IIconButtonProps {
  icon: ReactElement;
  onClick: () => void;
  className?: string;
  iconSize?: IconSize;
}

const IconButton = ({
  icon,
  onClick,
  className = "",
  iconSize = "small",
}: IIconButtonProps) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      <Icon icon={icon} size={iconSize} />
    </button>
  );
};

export default IconButton;

import React, { ReactElement } from "react";
import Icon, { IconSize } from "./Icon";
import { Aria } from "../../types";

export interface IIconButtonProps extends Aria {
  id: string;
  icon: ReactElement;
  onClick: () => void;
  className?: string;
  iconSize?: IconSize;
  iconClassName?: string;
}

const IconButton = ({
  id,
  icon,
  onClick,
  className = "",
  iconSize = "small",
  ariaControls,
  ariaHasPopup,
  ariaLabel,
  iconClassName = "",
}: IIconButtonProps) => {
  return (
    <button
      id={id}
      aria-haspopup={ariaHasPopup}
      aria-controls={ariaControls}
      aria-label={ariaLabel}
      data-cy={id}
      onClick={onClick}
      className={`${className}`}
    >
      <Icon icon={icon} size={iconSize} className={iconClassName} />
    </button>
  );
};

export default IconButton;

import React, { ReactElement } from "react";
import Icon from "./Icon";

interface IIconButtonProps {
  icon: ReactElement;
  onClick: () => void;
  className?: string;
}

const IconButton = ({ icon, onClick, className = "" }: IIconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} h-[32px] w-[32px] rounded-[5px]`}
    >
      <Icon icon={icon} />
    </button>
  );
};

export default IconButton;

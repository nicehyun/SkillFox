"use client";

import { useState } from "react";
import Button from "../../common/components/atoms/Button";
import Logo from "./Logo";
import Icon from "../../common/components/atoms/Icon";
import { FaQuestionCircle } from "react-icons/fa";

const Header = () => {
  const [demo, setDemo] = useState(false);
  const handleGuideButtonClick = () => {
    setDemo(true);
  };
  return (
    <header className="fixed z-20 flex h-[80px] w-full items-center justify-between border-b-[1px] border-gray2 bg-primary pl-4 pr-10 backdrop-blur-[8px]">
      <Logo />

      <div>
        <Button
          color="gray"
          id="guide"
          content={
            <span className="flex items-center">
              <Icon icon={<FaQuestionCircle />} className="mr-2" />
              이용 가이드
            </span>
          }
          onClick={handleGuideButtonClick}
          // TODO : ariaControls의 값 모달 id와 일치시키기
          ariaControls="modal-guide"
          ariaHaspopup="dialog"
          ariaLabel="이용 가이드 열기"
        />
      </div>
    </header>
  );
};

export default Header;

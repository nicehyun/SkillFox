"use client";

import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed z-20 flex h-[80px] w-full items-center justify-between border-b-[1px] border-gray2 bg-primary pl-4 pr-10 backdrop-blur-[8px]">
      <Logo />
    </header>
  );
};

export default Header;

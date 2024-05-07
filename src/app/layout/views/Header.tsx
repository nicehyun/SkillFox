"use client";

import { usePathname } from "next/navigation";
import AnalysisNavigationController from "./AnalysisNavigationController";
import Logo from "./Logo";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed z-30 flex h-[80px] w-full items-center justify-between border-b-[1px] border-gray2 bg-white/50 px-4 backdrop-blur-[4px]">
      <Logo />
      {pathname !== "/" && <AnalysisNavigationController />}
    </header>
  );
};

export default Header;

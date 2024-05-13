"use client";

import { usePathname } from "next/navigation";
import AnalysisNavigationController from "./AnalysisNavigationController";
import LogoLink from "../molecules/LogoLink";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed z-30 flex h-[80px] w-full items-center justify-between border-b-[1px] border-gray2 bg-white/50 px-4 backdrop-blur-[4px]">
      <LogoLink />
      {pathname !== "/" && <AnalysisNavigationController />}
    </header>
  );
};

export default Header;

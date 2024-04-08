import { ReactNode } from "react";

interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  return <div className="mx-auto max-w-[1000px] px-10">{children}</div>;
};

export default PageLayout;

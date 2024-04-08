import { ReactNode } from "react";

interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  return <div className="px-10">{children}</div>;
};

export default PageLayout;

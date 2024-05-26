import { ReactNode } from "react";

export interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: IPageLayoutProps) => {
  return (
    <div className="mx-auto min-h-[1000px] max-w-[1000px] px-4 py-10">
      {children}
    </div>
  );
};

export default PageLayout;

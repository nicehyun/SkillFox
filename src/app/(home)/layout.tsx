import { ReactNode } from "react";
import PageLayout from "../layout/components/molecules/PageLayout";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <PageLayout>{children}</PageLayout>;
};

export default Layout;

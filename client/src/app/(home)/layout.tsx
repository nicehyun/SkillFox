import { ReactNode } from "react";
import PageLayout from "../features/layout/views/PageLayout";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <PageLayout>{children}</PageLayout>;
};

export default Layout;

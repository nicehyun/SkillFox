import { ReactNode } from "react";

interface ITabPanelProps {
  children: ReactNode;
  tabValue: number;
  index: number;
}

const TabPanel = ({ children, index, tabValue }: ITabPanelProps) => {
  return (
    <section
      role="tabpanel"
      hidden={tabValue !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className="py-6"
    >
      {children}
    </section>
  );
};
export default TabPanel;

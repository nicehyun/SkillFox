import { ReactNode } from "react";
import { useTabValueHandler } from "../../hooks/useTabValueHandler";
import { Color } from "../../types";
import Tabs from "../Tabs";
import TabPanel from "../TabPanel";

interface IPanelProps {
  id: string;
  tabLabels: string[];
  tabContents: ReactNode[];
  color?: Color;
}

const Panel = ({
  id,
  tabLabels,
  tabContents,
  color = "primary",
}: IPanelProps) => {
  const { handleTabValueChange, tabValue } = useTabValueHandler();

  return (
    <article>
      <Tabs
        id={`panel-tabs__${id}`}
        tabsValue={tabValue}
        onChangeTabs={handleTabValueChange}
        tabLabels={tabLabels}
        color={color}
      />

      {tabContents.map((content, index) => (
        <TabPanel key={`panel-tab__${index}`} tabValue={tabValue} index={index}>
          {content}
        </TabPanel>
      ))}
    </article>
  );
};

export default Panel;

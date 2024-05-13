import { Meta, StoryObj } from "@storybook/react";
import ShowChartCountSelect, {
  IShowChartCountSelectProps,
} from "./ShowChartCountSelect";
import ReduxProvider from "@/redux/utils/ReduxProvider";

const meta: Meta<IShowChartCountSelectProps> = {
  title: "Common/Organisms/ShowChartCountSelect",
  component: ShowChartCountSelect,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: false,
      description: "셀렉트의 id 값입니다.",
    },
  },
};

export default meta;

export const Defalut: StoryObj<IShowChartCountSelectProps> = {
  args: {
    id: "defalut",
  },
  decorators: (story) => <ReduxProvider>{story()}</ReduxProvider>,
};

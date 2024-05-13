import { Meta, StoryObj } from "@storybook/react";
import { CustomSelect, ICustomSelectProps } from "./CustomSelect";
import { useState } from "react";

const meta: Meta<ICustomSelectProps> = {
  title: "Common/Molecules/CustomSelect",
  component: CustomSelect,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    options: {
      control: "array",
      description:
        "사용자에게 제공될 옵션들의 배열입니다. 각 옵션은 숫자로 표현됩니다.",
    },
    defalutSelectContent: {
      control: "text",
      description:
        "셀렉트 박스의 기본 레이블로, 사용자의 옵션 선택 후 표시될 기본 텍스트입니다.",
    },
    selectValue: {
      control: "radio",
      description: "현재 선택된 값으로, 선택 가능한 옵션 중 하나를 나타냅니다.",
    },
    onChangeSelectValue: {
      action: "changed",
      description:
        "옵션 선택 시 실행될 콜백 함수입니다. 선택된 값의 변경을 처리합니다.",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

const CustomSelectWithHooks = () => {
  const [value, setValue] = useState(3);

  const handleValueChange = (value: number) => {
    setValue(value);
  };
  return (
    <CustomSelect
      id="default"
      options={[1, 2, 3, 4, 5]}
      defalutSelectContent="선택"
      onChangeSelectValue={handleValueChange}
      selectValue={value}
      className="w-full"
    />
  );
};

export const Default: StoryObj<ICustomSelectProps> = {
  name: "Default",
  render: () => <CustomSelectWithHooks />,
};

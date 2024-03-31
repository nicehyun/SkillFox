import { Color, Size } from "../../types";

export interface IRadioProps {
  id: string;
  name: string;
  inputTestId?: string;
  labelTestId?: string;
  label: string;
  checked?: boolean;
  onChange?: () => void;
  color: Color;
  size: Size;
  value?: string;
}

const Radio = ({
  id,
  inputTestId,
  labelTestId,
  name,
  label,
  checked,
  onChange,
  color,
  size,
  value,
}: IRadioProps) => {
  const colorClasses = {
    primary: {
      label: `has-[:checked]:border-primary has-[:checked]:bg-primary/40`,
      checkedBackground: `${checked ? "border-primary" : "border-gray1 text-black2"}`,
      checkedCircle: `${checked ? "bg-primary" : ""}`,
    },
    secondary: {
      label: `has-[:checked]:border-secondary has-[:checked]:bg-secondary/40 has-[:checked]:text-white`,
      checkedBackground: `${checked ? "border-secondary" : "border-gray1 text-black2"}`,
      checkedCircle: `${checked ? "bg-secondary" : ""}`,
    },
  };

  const sizeClasses = {
    small: {
      label: "h-10 text-small",
      checkedBackground: "h-[16px] w-[16px]",
      checkedCircle: "h-[10px] w-[10px]",
    },
    normal: {
      label: "h-14 text-normal",
      checkedBackground: "h-[18px] w-[18px]",
      checkedCircle: "h-[12px] w-[12px]",
    },
    medium: {
      label: "h-18 text-medium",
      checkedBackground: "h-[20px] w-[20px]",
      checkedCircle: "h-[14px] w-[14px]",
    },
  };

  const getClasses = (type: "label" | "checkedBackground" | "checkedCircle") =>
    `${colorClasses[color][type]} ${sizeClasses[size][type]}`;

  return (
    <label
      data-cy={labelTestId}
      htmlFor={id}
      className={`${getClasses("label")} flex cursor-pointer items-center rounded-[5px] border-[1px] border-transparent pl-[10px]`}
    >
      <input
        type="radio"
        id={id}
        data-cy={inputTestId}
        name={name}
        checked={checked}
        onChange={onChange}
        className="hidden"
        value={value}
      />

      <span
        className={`${getClasses("checkedBackground")} flexCenter mr-4 rounded-full border`}
      >
        {checked && (
          <span
            className={`inline-block rounded-full ${getClasses("checkedCircle")}`}
          ></span>
        )}
      </span>

      <span className={`${checked ? "font-bold" : ""}`}>{label}</span>
    </label>
  );
};

export default Radio;

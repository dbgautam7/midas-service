import { Select } from "antd";
import { Dispatch, SetStateAction } from "react";

interface ICustomSelectProps<T> {
  title?: string;
  selectedValue: T | null;
  setSelectedValue: Dispatch<SetStateAction<T | null>>;
  options: {
    label: string;
    value: T;
  }[];
  placeholder?: string;
}

const CustomSelect = <T extends string | number>({
  title,
  selectedValue,
  setSelectedValue,
  options,
  placeholder = "Select",
}: ICustomSelectProps<T>) => {
  const onChange = (value: T) => {
    setSelectedValue(value);
  };

  return (
    <div className="flex gap-2 items-center">
      {title && <p className="font-semibold text-gray-9">{title}</p>}
      <Select
        placeholder={placeholder}
        value={selectedValue}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomSelect;

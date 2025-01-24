import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";

interface ICustomSearchProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const CustomSearch: React.FC<ICustomSearchProps> = ({
  searchValue,
  setSearchValue,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "value");
    setSearchValue(e.target.value);
  };

  return (
    <Space.Compact size="large" className="w-[40%]">
      <Input
        addonBefore={<SearchOutlined />}
        placeholder="Search by doctor or patients name"
        onChange={onChange}
        value={searchValue}
      />
    </Space.Compact>
  );
};

export default CustomSearch;

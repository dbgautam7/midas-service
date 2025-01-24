import React, { useState } from "react";
import { Button, DatePicker } from "antd";
import { Stethoscope } from "../assets/icons/AllSvgIcons";
import CustomSelect from "./Select";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  FileExcelOutlined,
} from "@ant-design/icons";
import { exportToExcel } from "../utils/exportToExcel";
import { doctorOptions } from "../data";

const { RangePicker } = DatePicker;

interface IFilterProps {
  data: object[];
}

const Filters: React.FC<IFilterProps> = ({ data }) => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [selectedDoctorId, setSelectedDoctorId] = useState<number | null>(null);
  const handleExportToExcel = () => {
    exportToExcel(data, "Patients_Data");
  };
  return (
    <div className="bg-gray-800 rounded-md flex flex-col gap-4">
      <section className="flex  items-center justify-between w-full">
        <span className="flex items-center gap-4">
          <Stethoscope />
          <h1>OPD Department</h1>
          <Button className="bg-green-600 ">Filter</Button>
        </span>
        <span className="flex items-center gap-4">
          <Button
            icon={showFilter ? <EyeInvisibleOutlined /> : <EyeOutlined />}
            className="bg-gray-600 "
            onClick={() => {
              console.log(showFilter, "ppp");
              setShowFilter(!showFilter);
            }}
          >
            {showFilter ? "Hide Filter" : "Show Filter"}
          </Button>
          <Button
            icon={<FileExcelOutlined />}
            className="bg-blue-600"
            onClick={handleExportToExcel}
          >
            Download Excel
          </Button>
        </span>
      </section>
      {showFilter && (
        <div className="flex gap-4">
          <section className="flex flex-col gap-2">
            <label className="text-start font-bold text-gray-9">
              Filter via Period
            </label>
            <RangePicker className="bg-gray-700" />
          </section>
          <section className="flex flex-col gap-2">
            <label className="text-start font-bold text-gray-9">
              Filter via Doctor
            </label>
            <CustomSelect
              placeholder="Select Doctor Name"
              options={doctorOptions}
              selectedValue={selectedDoctorId}
              setSelectedValue={setSelectedDoctorId}
            />
          </section>
        </div>
      )}
    </div>
  );
};

export default Filters;

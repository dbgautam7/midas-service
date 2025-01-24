import React, { useState } from "react";
import type { TableColumnsType } from "antd";
import { Tag, Button } from "antd";
import Filters from "../components/Filter";
import CustomLayout from "../layouts/Custom";
import StatsCards from "../components/Card";
import Overview from "../components/Overview";
import CustomSearch from "../components/Search";
import DynamicTable from "../components/Table";
import CustomSelect from "../components/Select";
import { EyeOutlined } from "@ant-design/icons";
import { IPatientTableData } from "../types";
import { useDebounce } from "../hooks/useDebounce";
import { pageSizeOptions } from "../data";

const columns: TableColumnsType = [
  {
    title: "S.No",
    dataIndex: "serialNumber",
    key: "serialNumber",
    width: 80,
    align: "center",
  },
  {
    title: "UHID",
    dataIndex: "uhid",
    key: "uhid",
    width: 100,
    align: "center",
  },
  {
    title: "Patient Name",
    dataIndex: "patientName",
    key: "patientName",
    width: 200,
    align: "center",
  },
  {
    title: "Age/Gender",
    dataIndex: "ageGender",
    key: "ageGender",
    width: 110,
    align: "center",
  },
  {
    title: "Billing Date & Time",
    dataIndex: "billingDateTime",
    key: "billingDateTime",
    width: 170,
    align: "center",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    ellipsis: true,
    width: 150,
    align: "center",
  },
  {
    title: "Doctor Name",
    dataIndex: "doctorName",
    key: "doctorName",
    width: 200,
    align: "center",
  },
  {
    title: "Queue No.",
    dataIndex: "queueNo",
    key: "queueNo",
    width: 100,
    align: "center",
  },
  {
    title: "Previous Rec.",
    dataIndex: "previousRec",
    key: "previousRec",
    render: (text: number) => <span>{text}</span>,
    width: 140,
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => {
      const color =
        status === "Follow Up" ? "blue" : status === "New" ? "orange" : "green";
      return (
        <Tag
          bordered={false}
          color={color}
          className="w-full text-center py-1 rounded-full"
        >
          {status}
        </Tag>
      );
    },
    width: 120,
    align: "center",
  },
  {
    title: "Action",
    key: "action",

    render: () => <Button type="text" icon={<EyeOutlined />} />,
    width: 120,
    align: "center",
  },
];

//mockdata
const dataSource = Array.from({ length: 50 }, (_, index) => ({
  key: String(index + 1),
  serialNumber: String(index + 1),
  uhid: "81000216",
  patientName: `Patient ${index + 1}`,
  ageGender: `${Math.floor(Math.random() * 60) + 1} Yrs/${
    index % 2 === 0 ? "M" : "F"
  }`,
  billingDateTime: "2081-06-13 11:09:47",
  department: [
    "BIOCHEMISTRY",
    "HAEMATOLOGY",
    "IMMUNOLOGY",
    "MICROBIOLOGY",
    "GENETICS",
    "NEUROLOGY",
    "PATHOLOGY",
    "PHARMACOLOGY",
    "ENDOCRINOLOGY",
  ][index % 9],
  doctorName: ["Dr. Smith", "Dr. Jane", "Dr. John", "Dr. Alex"][index % 4],
  queueNo: index + 1,
  previousRec: Math.floor(Math.random() * 5) + 1,
  status: ["Follow Up", "New", "Free"][index % 3],
}));

const OpdManagement: React.FC = () => {
  const [pagePerSize, setPagePerSize] = useState<number | null>(10);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(dataSource);
  //   const [selectedDocterId, setSelectedDoctorId] = useState<number | null>(null);

  useDebounce(
    () => {
      const filtered = dataSource.filter(
        (record: IPatientTableData) =>
          record.patientName
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          record.doctorName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filtered);
    },
    [searchValue],
    500
  );

  return (
    <CustomLayout>
      <div className="min-h-screen flex flex-col gap-4">
        <Filters
          //   selectedValue={selectedDocterId}
          //   setSelectedValue={setSelectedDoctorId}
          data={filteredData}
        />
        <StatsCards />
        <Overview />
        <section className="flex items-center justify-between">
          <CustomSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <CustomSelect
            title="Show"
            selectedValue={pagePerSize}
            setSelectedValue={setPagePerSize}
            options={pageSizeOptions}
          />
        </section>
        <DynamicTable
          columns={columns}
          dataSource={filteredData}
          pageSize={pagePerSize ?? 10}
        />
      </div>
    </CustomLayout>
  );
};

export default OpdManagement;

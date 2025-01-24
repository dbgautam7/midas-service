import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { IPatientTableData } from "../types";

interface IPatientTableProps {
  columns: TableColumnsType;
  dataSource: IPatientTableData[];
  pageSize: number;
}

const PatientTable: React.FC<IPatientTableProps> = ({
  columns,
  dataSource,
  pageSize,
}) => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", borderRadius: "10px" }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{
          pageSize: pageSize,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} entries`,
          position: ["bottomRight"],
        }}
        bordered
        scroll={{ x: 1200, y: 800 }}
      />
    </div>
  );
};

export default PatientTable;

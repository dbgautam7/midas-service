import React, { Dispatch, SetStateAction } from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";

interface ICustomPaginationProps {
  total: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

const CustomPagination: React.FC<ICustomPaginationProps> = ({
  total,
  currentPage,
  setCurrentPage,
}) => {
  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };
  return (
    <Pagination
      current={currentPage}
      total={total}
      align="end"
      onChange={onChange}
    />
  );
};

export default CustomPagination;

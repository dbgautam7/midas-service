import React from "react";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

const CustomBreadcrum: React.FC = () => (
  <Breadcrumb
    separator={<RightOutlined />}
    items={[
      {
        href: "",
        title: <HomeOutlined />,
      },
      {
        href: "/clinic", //for dynamic navigation
        title: "Clinical Management",
      },
      {
        href: "/opd",
        title: "OPD",
      },
      {
        title: "New Patients",
      },
    ]}
  />
);

export default CustomBreadcrum;

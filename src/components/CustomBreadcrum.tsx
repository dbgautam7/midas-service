import React from "react";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const CustomBreadcrum: React.FC = () => {
  const { pathname } = useLocation();

  // Split the pathname into segments
  const pathSegments = pathname.split("/").filter((segment) => segment); // Filter out empty segments
  // Dynamically generate breadcrumb items
  const breadcrumbItems: Array<{
    href: string;
    title: React.ReactNode | string;
  }> = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`; // Create href for each breadcrumb item
    const title = segment
      .replace("-", " ") // Replace dashes with spaces for better readability
      .split(" ")
      .map((item: string) => capitalizeFirstLetter(item)) // Use capitalizeFirstLetter for each word
      .join(" "); // Rejoin the words with spaces
    return {
      href,
      title,
    };
  });

  // Add the Home breadcrumb item
  breadcrumbItems.unshift({
    href: "/",
    title: <HomeOutlined />,
  });

  return <Breadcrumb separator={<RightOutlined />} items={breadcrumbItems} />;
};

export default CustomBreadcrum;

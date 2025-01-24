import React from "react";
import { Tabs } from "antd";

const TabsPanel: React.FC = () => {
  const items = [
    { label: "New Patients (12)", key: "1" },
    { label: "Nurse Seen (4)", key: "2" },
    { label: "Doctor Visited (6)", key: "3" },
    { label: "Appointment (6)", key: "4" },
  ];

  return <Tabs items={items} className="mb-4 bg-gray-800 p-2 rounded-md" />;
};

export default TabsPanel;

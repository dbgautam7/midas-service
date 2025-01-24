import { useState } from "react";
import { overviewStats } from "../data";

const Overview = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex items-center gap-4">
      {overviewStats.map((item, index) => {
        return (
          <span
            onClick={() => setActiveTab(index)}
            key={index}
            className={`flex items-center gap-4 px-4 py-2 bg-white rounded-t-xl cursor-pointer  ${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-9 border border-gray-8"
            }`}
          >
            <p>{item.title}</p>
            <p>({item.count})</p>
          </span>
        );
      })}
    </div>
  );
};

export default Overview;

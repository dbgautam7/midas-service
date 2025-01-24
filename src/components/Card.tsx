import React from "react";
import { stats } from "../data";

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col gap-4  bg-white p-4 rounded-lg border border-gray-8"
        >
          <section className="flex justify-between">
            <p className="font-semibold text-gray-7">{stat.title}</p>
            {stat.extraIcon ? (
              <stat.extraIcon />
            ) : stat?.extraText ? (
              <p className="font-semibold text-gray-7">{stat.extraText}</p>
            ) : (
              ""
            )}
          </section>
          <section className="flex justify-between">
            <span className="flex gap-4 items-center">
              <p className="flex items-center justify-center text-gray-9">
                {stat.icon}
              </p>
              <p className="font-bold text-gray-9">{stat.value}</p>
            </span>
            <p className="font-bold text-gray-9">{stat?.queueNo}</p>
          </section>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;

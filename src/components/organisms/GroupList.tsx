import React from "react";
import Group from "../molecules/Group";

const GroupList = () => {
  return (
    <div className="flex flex-row w-full fixed bg-gray-700 items-center">
      <span className="px-2 text-white">Burg</span>
      <div className="flex flex-row space-x-4 w-full overflow-auto py-2 px-2  ">
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
    </div>
  );
};

export default GroupList;

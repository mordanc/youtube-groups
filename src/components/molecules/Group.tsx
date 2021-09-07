import React from "react";

const Group = ({ name }: { name: string }) => {
  return (
    <div className="px-4 py-4 text-white transition transform bg-gray-900 cursor-pointer select-none rounded-xl hover:-translate-y-1 hover:bg-gray-600">
      <span className="text-xl">{name}</span>
    </div>
  );
};

export default Group;

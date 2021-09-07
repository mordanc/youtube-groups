import React from "react";
import { AddIcon } from "@chakra-ui/icons";

const HoverButton = () => {
  return (
    <div className="fixed px-4 py-4 text-white transition transform bg-gray-700 cursor-pointer bottom-2 right-2 rounded-2xl hover:-translate-y-2 hover:bg-gray-600">
      <AddIcon w={6} h={4} />
    </div>
  );
};

export default HoverButton;

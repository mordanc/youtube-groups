import React from "react";
import Group from "../molecules/Group";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure, Button, IconButton } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const GroupList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<HTMLButtonElement>(null);
  return (
    <div className="fixed flex flex-row items-center w-full bg-gray-700">
      <span className="px-2 text-white">
        <IconButton
          aria-label="open sidebar"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          ref={btnRef}
        />
      </span>
      <div className="flex flex-row w-full px-2 py-2 space-x-4 overflow-auto ">
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
      <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </div>
  );
};

export default GroupList;

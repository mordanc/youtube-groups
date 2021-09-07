import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure, IconButton } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { Avatar } from "@chakra-ui/react";
import { mockChannels } from "mockData";

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
      <div className="flex flex-row items-center w-full px-2 py-2 space-x-4 overflow-auto">
        {mockChannels.map((channel) => (
          <Avatar key={channel.id} name={channel?.name} />
        ))}
      </div>
      <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </div>
  );
};

export default GroupList;

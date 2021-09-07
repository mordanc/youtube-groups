import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { mockChannels } from "mockData";
import React, { useState } from "react";

export const SelectableChannel = ({
  onClick,
  channelInfo,
}: {
  onClick?: () => any;
  channelInfo: Channel;
}) => {
  return (
    <span
      onClick={onClick}
      className="py-1 pl-2 transition border border-gray-600 rounded hover:bg-gray-700"
    >
      {channelInfo?.name || "Youtuber"}
    </span>
  );
};

export type Channel = {
  id: number;
  name: string;
};

const Sidebar = ({
  isOpen,
  onClose,
  btnRef,
}: {
  isOpen: boolean;
  onClose: () => any;
  btnRef: any;
}) => {
  const [groupName, setGroupName] = useState("");
  const [channels, setChannels] = useState<Channel[]>([]);

  const sortChannelsInPlace = (channelArray: Channel[]) =>
    channelArray.sort((a, b) => a.name.localeCompare(b.name));

  const addOrRemoveChannel = (channel: Channel) => {
    const channelInList = channels.findIndex((chann) => {
      return chann.id === channel.id;
    });

    let newArray = [...channels];

    if (channelInList !== -1) {
      newArray.splice(channelInList, 1);
    } else {
      newArray = [...newArray, channel];
    }

    sortChannelsInPlace(newArray);
    setChannels(newArray);
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      colorScheme="blackAlpha"
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create Group</DrawerHeader>

        <DrawerBody>
          <Stack spacing="8">
            <Input
              placeholder="Group name..."
              value={groupName}
              onChange={(e) => setGroupName(e?.target?.value)}
            />

            <span>Selected Channels</span>
            <HStack>
              {channels.map((channel, i) => (
                <span key={i}>{channel?.name}</span>
              ))}
            </HStack>
            <Stack>
              {sortChannelsInPlace?.(mockChannels)?.map((channel, i) => (
                <SelectableChannel
                  key={i}
                  channelInfo={channel}
                  onClick={() => addOrRemoveChannel(channel)}
                />
              ))}
            </Stack>
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;

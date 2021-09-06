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
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useEffect, useReducer } from "react";

export const SelectableChannel = ({
  onClick,
  channelName,
}: {
  onClick?: () => any;
  channelName?: string;
}) => {
  return (
    <span
      onClick={onClick}
      className="py-1 pl-2 transition border border-gray-600 rounded hover:bg-gray-700"
    >
      {channelName || "Youtuber"}
    </span>
  );
};

export type Channel = { id: number; name: string };

export type State = { groupName: string; subscriptions: Channel[] };

const initialState: State = { groupName: "", subscriptions: [] };

function reducer(state: any, action: any): Partial<State> {
  switch (action.type) {
    case "updateGroupName":
      return { groupName: action.payload.groupName };
    case "removeChannel": {
      const newArray = state.subscriptions.filter(
        (item: Channel) => item?.id !== action.payload?.id
      );
      return { subscriptions: newArray };
    }
    case "addChannel": {
      const newArray = [...state.subscriptions, action.payload];
      return { subscriptions: newArray };
    }
    default:
      throw new Error();
  }
}

export const useSidebarState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addChannel = (channel: Channel) =>
    dispatch({ type: "addChannel", payload: channel });

  const removeChannel = (channel: Channel) =>
    dispatch({ type: "removeChannel", payload: channel });

  const updateGroupName = (name: string) =>
    dispatch({ type: "updateGroupName", payload: name });

  const selectGroupName = () => state.groupName;

  return { addChannel, removeChannel, state, updateGroupName, selectGroupName };
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
  // const [state, dispatch] = useReducer(reducer, initialState);

  const { addChannel, removeChannel, state, updateGroupName, selectGroupName } =
    useSidebarState();

  useEffect(() => {
    console.log({ ...state.subscriptions });
  }, [state]);

  const toggleChannel = (channel: Channel) => {
    console.log(channel);
    const itemIsInArray = state.subscriptions?.find(
      (sub) => sub?.id === channel?.id
    );
    if (itemIsInArray) {
      addChannel(channel);
    } else {
      removeChannel(channel);
    }
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
            <Input placeholder="Group name..." />
            <span className="pt-16 text-xl ">{selectGroupName()}</span>
            <button
              onClick={() =>
                updateGroupName(`${Math.floor(Math.random() * 100)} group`)
              }
            >
              ffff
            </button>

            <span>Selected Groups</span>
            <div>
              {state?.subscriptions?.map((sub) => (
                <span>{sub?.name}</span>
              ))}
            </div>
            <Stack>
              <SelectableChannel
                channelName="ACG"
                onClick={() => toggleChannel({ name: "ACG", id: 1 })}
              />
              <SelectableChannel channelName="Skill Up" />
              <SelectableChannel channelName="Force Gaming" />
              <SelectableChannel channelName="Angry Joe Show" />
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

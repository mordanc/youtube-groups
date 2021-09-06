import React from "react";
import HoverButton from "../../components/atoms/HoverButton";
import GroupList from "../../components/organisms/GroupList";
import ThumbnailList from "../../components/organisms/ThumbnailList";

const Feed = () => {
  return (
    <div className="flex flex-col bg-gray-700">
      <div className="bg-gray-400 container mx-auto flex flex-col">
        <HoverButton />
        <GroupList />
        <div className="mt-20">
          <ThumbnailList />
        </div>
      </div>
    </div>
  );
};

export default Feed;

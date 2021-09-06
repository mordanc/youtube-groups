import React from "react";
import Thumbnail from "../molecules/Thumbnail";

const ThumbnailList = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 px-2 py-2">
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
      <Thumbnail />
    </div>
  );
};

export default ThumbnailList;

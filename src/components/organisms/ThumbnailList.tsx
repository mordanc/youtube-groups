import React from "react";
import YouTube from "react-youtube";

export const ThumbnailSection = ({ videoId }: { videoId: string }) => {
  const opts = {
    height: "70%",
    width: "100%",
  };

  return (
    <div>
      <span className="text-black text-xl">
        Tom Scott - Why Britain uses separate separate separate separate
      </span>
      <div className="mt-4">
        <YouTube videoId={videoId} id={"string"} opts={opts} />
      </div>
    </div>
  );
};

const ThumbnailList = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 px-2 py-2">
      <div className="px-2 rounded flex flex-col space-y-4 truncate">
        <ThumbnailSection videoId={"9uZam0ubq-Y"} />
        <ThumbnailSection videoId={"9uZam0ubq-Y"} />
        <ThumbnailSection videoId={"9uZam0ubq-Y"} />
        <ThumbnailSection videoId={"9uZam0ubq-Y"} />
        <ThumbnailSection videoId={"9uZam0ubq-Y"} />
        <ThumbnailSection videoId={"9uZam0ubq-Y"} />
        <ThumbnailSection videoId={"9uZam0ubq-Y"} />
        <ThumbnailSection videoId={"9uZam0ubq-Y"} />
      </div>
    </div>
  );
};

export default ThumbnailList;

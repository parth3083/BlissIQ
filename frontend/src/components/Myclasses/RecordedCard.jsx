import React from "react";
import { GoDownload } from "react-icons/go";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdPlayCircleOutline } from "react-icons/md";
import AvatarCircles from "../ui/avatar-circles";

// Static data moved outside to avoid re-creation on every render
const AVATARS = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "https://github.com/dillionverma" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "https://github.com/tomonarifeehan" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "https://github.com/BankkRoll" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "https://github.com/safethecode" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "https://github.com/sanjay-mali" },
  { imageUrl: "https://avatars.githubusercontent.com/u/89768406", profileUrl: "https://github.com/itsarghyadas" },
];

function RecordedCard() {
  return (
    <div className="Card flex items-center justify-between flex-shrink-0 mb-5 shadow-lg w-full h-52 p-2 rounded-md border">
      {/* Left Section */}
      <div className="left w-[40%] relative h-full bg-red-500 flex items-center justify-center">
        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full">
          <MdPlayCircleOutline className="text-6xl" />
          <h1 className="text-xl font-medium">Click to Play</h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-[58%] flex flex-col gap-2 justify-center h-full">
        <h1 className="text-3xl font-bold">Art & Illustration</h1>
        <p className="text-sm opacity-80">by Aftab Quresi</p>
        <h1 className="text-base">05 September 2024</h1>
        <AvatarCircles numPeople={10} avatarUrls={AVATARS} />

        {/* Action Buttons */}
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 text-md border rounded-md px-3 py-1">
            <GoDownload />
            Download
          </button>
          <button className="flex items-center justify-center border border-red-500 rounded-md px-3 py-1">
            <RiDeleteBin5Fill className="text-xl text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecordedCard;

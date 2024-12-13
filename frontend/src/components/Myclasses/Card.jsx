import React from "react";
import AvatarCircles from "../ui/avatar-circles";

// Avatar data moved outside the component to avoid recreating it on every render
const AVATARS = [
  { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "https://github.com/dillionverma" },
  { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "https://github.com/tomonarifeehan" },
  { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "https://github.com/BankkRoll" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "https://github.com/safethecode" },
  { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "https://github.com/sanjay-mali" },
  { imageUrl: "https://avatars.githubusercontent.com/u/89768406", profileUrl: "https://github.com/itsarghyadas" },
];

function Card({ classtype, language, course, tutor, time, date, attendees }) {
  return (
    <div className="Card flex flex-shrink-0 mb-5 shadow-lg flex-col w-full h-52 bg-green-500 rounded-md overflow-hidden">
      {/* Upper Card Section */}
      <div className="upperCard w-full h-[65%] bg-blue-300 p-3 flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-sm">{classtype}</h1>
          <button className="text-sm border rounded-sm px-2 py-1 border-slate-500">
            {language}
          </button>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <div className="image w-20 h-20 rounded-full bg-green-500"></div>
          <div>
            <h1 className="text-3xl font-bold">{course}</h1>
            <p className="text-sm opacity-80">by {tutor}</p>
          </div>
        </div>
      </div>

      {/* Lower Card Section */}
      <div className="lowerCard bg-yellow-200 p-2 flex items-center justify-between w-full h-[35%]">
        <div className="left w-[55%] space-y-1">
          <p className="text-lg">
            <span className="font-bold">Time:</span> {time}
          </p>
          <p className="text-lg">
            <span className="font-bold">Date:</span> {date}
          </p>
        </div>
        <div className="right w-[40%] flex flex-col items-center">
          <h1 className="text-xl font-bold">Attendees</h1>
          {attendees > 0 ? (
            <AvatarCircles numPeople={attendees} avatarUrls={AVATARS} />
          ) : (
            <p className="text-sm text-gray-600">No attendees yet</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

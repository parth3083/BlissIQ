import React from "react";
import { IoMdNotifications } from "react-icons/io";

function NotificationMessageCard() {
  return (
    <div className="Message flex border  items-center mb-3 gap-2 rounded-lg shadow-lg w-full border-b-2">
      <div className="flex items-center justify-center w-1/12">
        <IoMdNotifications className="text-4xl" />
      </div>
      <div className="flex flex-col justify-between py-2 w-11/12 h-full">
        <div className="text-md flex items-center w-full h-2/3">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, expedita?
        </div>
        <div className="flex items-center justify-start w-full h-1/3 mt-2 gap-5">
          <h1 className="text-md font-bold">12:42</h1>
          <h1 className="text-md font-bold">12 August 2024</h1>
        </div>
      </div>
    </div>
  );
}

export default NotificationMessageCard;

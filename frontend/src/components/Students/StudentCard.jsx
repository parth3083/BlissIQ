import React from "react";
import { LiaCrownSolid } from "react-icons/lia";
import { SlOptionsVertical } from "react-icons/sl";

function StudentCard() {
  return (
    <div className="student-card mb-3 hover:bg-blue-300 rounded-lg shadow-lg border  transition duration-300 cursor-pointer w-full h-20 flex items-center justify-between">
      {/* Left Section */}
      <div className="left flex items-center gap-5 px-3 w-[45%]">
        <h1 className="text-xl font-bold">1.</h1>
        <div className="image w-16 h-16 rounded-full bg-purple-500"></div>
        <div className="details">
          <h1 className="text-xl font-bold">Nupur Kadam</h1>
          <p className="text-sm text-opacity-80">class 6th</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="right flex items-center gap-5 px-3 w-[20%]">
        <div className="points flex items-center gap-2 p-2 bg-white border border-yellow-400 shadow-md rounded-md">
          <LiaCrownSolid className="text-2xl text-yellow-400" />
          <span className="text-yellow-400">124 points</span>
        </div>
        <SlOptionsVertical className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}

export default StudentCard;

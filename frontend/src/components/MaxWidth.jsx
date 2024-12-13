import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import image1 from "../assets/logout.png";
import { useNavigate } from "react-router-dom";

function MaxWidth({ children }) {
  const [isLoggedOutPopupVisible, setIsLoggedOutPopupVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedOutPopupVisible(true);
  };

  const confirmLogout = () => {
    navigate("/login");
    setIsLoggedOutPopupVisible(false);
  };

  const cancelLogout = () => {
    setIsLoggedOutPopupVisible(false);
  };

  return (
    <div className="W-full flex flex-col h-screen font-pop py-2 ">
      <Navbar />
      <div className="w-full gap-5 py-3 flex-grow flex items-center px-5 mt-1">
        <div className="left h-full ">
          <Sidebar handleLogout={handleLogout} />
        </div>
        <div className="main-content h-full overflow-hidden flex-grow">
          {children}
        </div>
      </div>
      {isLoggedOutPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center flex flex-col items-center justify-center max-w-sm">
            <img src={image1} alt="Logout Confirmation" />
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-around gap-4">
              <button
                className="border font-semibold w-32 px-4 py-2 rounded-md"
                onClick={confirmLogout}
              >
                Yes
              </button>
              <button
                className="bg-yellow-400 font-semibold w-32 px-4 py-2 rounded-md"
                onClick={cancelLogout}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MaxWidth;

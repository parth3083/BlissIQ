import React, { useState } from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { PiChats } from "react-icons/pi";
import { TbHelp } from "react-icons/tb";
import { FiLogIn } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Sidebar = ({
  toggleSidebar,
  isSidebarOpen,
  setActiveTab,
  activeTab,
  handleLogout,
}) => {
  const tabs = [
    {
      id: "home",
      label: "Home",
      icon: <MdHomeFilled />,
      route: "/dashboard-home",
    },
    {
      id: "myClasses",
      label: "My Classes",
      icon: <FaChalkboardTeacher />,
      route: "/my-classes",
    },
    { id: "tests", label: "Tests", icon: <LuNotebookPen />, route: "/tests" },
    {
      id: "courses",
      label: "Courses",
      icon: <GiBookCover />,
      route: "/courses",
    },
    { id: "chats", label: "Chats", icon: <PiChats />, route: "/chats" },
    { id: "profile", label: "Profile", icon: <CgProfile />, route: "/profile" },
    {
      id: "helpSupport",
      label: "Help & Support",
      icon: <TbHelp />,
      route: "/help-support",
    },
    { id: "logout", label: "Logout", icon: <FiLogIn /> },
  ];

  return (
    <nav
      className={`fixed md:static bg-white w-56 h-full flex flex-col items-center justify-center border rounded-md border-slate-500 z-10 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <ul className="flex-1 py-10 space-y-4 w-full">
        {tabs.map(({ id, label, icon, route }) => (
          <li
            key={id}
            className={`p-3 text-xl cursor-pointer flex items-center gap-2 w-full justify-start ${
              activeTab === id
                ? "text-black font-semibold"
                : "text-opacity-70 hover:text-gray-800"
            }`}
          >
            <NavLink
              to={route || "#"}
              className="w-full flex items-center gap-2"
              onClick={(e) => {
                if (id === "logout") {
                  e.preventDefault();
                  handleLogout();
                } else {
                  setActiveTab(id);
                  toggleSidebar(false); // Close sidebar on small screens
                }
              }}
            >
              {icon}
              <span className="md:inline">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;

import React from "react";
import LeaderBoardContent from "./Home/LeaderBoardContent";
import CoursesContent from "./Home/CoursesContent";
import TestContent from "./Home/TestContent";
import TotalStudentsContent from "./Home/TotalStudentsContent";
import NewStudentsContent from "./Home/NewStudentsContent";


function ContentRenderer({ activeButton }) {
  const renderContent = () => {
    switch (activeButton) {
      case "leaderboard":
        return <LeaderBoardContent/>;
      case "courses":
        return <CoursesContent/>;
      case "tests":
        return <TestContent/>;
      case "activity":
        return <TotalStudentsContent/>;
      case "students":
        return <NewStudentsContent/>;
      default:
        return <h2 className="text-xl font-bold">Select a Tab to View Content</h2>;
    }
  };

  return <div className="w-full h-full ">{renderContent()}</div>;
}

export default ContentRenderer;

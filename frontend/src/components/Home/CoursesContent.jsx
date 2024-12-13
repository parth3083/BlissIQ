import React from "react";
import Card from "./Card";

function CoursesContent() {
  return (
    <div className="w-full h-[60vh]  overflow-y-auto overflow-hidden  flex items-start justify-start gap-8 px-8 flex-wrap ">
      <Card type={"Foundations of English"} title={"Alphabets - 1"} />
      <Card type={"Foundations of English"} title={"Alphabets - 1"} />
      <Card type={"Foundations of English"} title={"Alphabets - 1"} />
      <Card type={"Foundations of English"} title={"Alphabets - 1"} />
    </div>
  );
}

export default CoursesContent;
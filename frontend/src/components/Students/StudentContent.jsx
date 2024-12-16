import React from "react";
import StudentCard from "./StudentCard";

const students = [
  { id: 1, name: "Aftaab Qureshi", grade: "Class 6th", points: 124 },
  { id: 2, name: "Saniya Shah", grade: "Class 8th", points: 150 },
];

function StudentContent() {
  return (
    <div className="w-full h-full p-3">
      <h2 className="text-4xl mb-2 border-b-2 font-semibold">Students</h2>
      <div className="w-full h-[77.5vh] overflow-hidden overflow-y-auto">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default StudentContent;

import React from 'react'
import StudentCard from './StudentCard'

function StudentContent() {
  return (
    <div className="w-full h-full p-3">
    <h2 className="text-4xl mb-2 border-b-2 font-semibold">Students</h2>
    <div className="w-full h-[77.5vh]  overflow-hidden  overflow-y-auto ">
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
  </div>
  )
}

export default StudentContent
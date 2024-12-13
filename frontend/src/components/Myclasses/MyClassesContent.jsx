import React, { useRef, useState } from "react";
import Card from "./Card";
import RecordedCard from "./recordedCard";
import image1 from "../../assets/bg.webp";
import { Calendar } from "../ui/calendar";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const CLASSES = [
  {
    classtype: "Live class",
    course: "Design & Illustration",
    tutor: "Aftab Qureshi",
    time: "04:00 PM",
    date: "05 September 2024",
    attendees: 10,
    language: "English",
  },
  // Add more classes here...
];

function MyClassesContent() {
  const [date, setDate] = useState(new Date());
  const [tab, setTab] = useState("upcoming");
  const [showForm, setShowForm] = useState(false); // state to toggle form visibility
  const [classData, setClassData] = useState(null); // state to hold the scheduled class data
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [bannerImage, setBannerImage] = useState(null);
  const [description, setDescription] = useState("");
  
  const fileInputRef = useRef(null);

  // Function to trigger file input click
  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(file);
    }
  };

  const handleScheduleClassClick = () => {
    setShowForm(true); // Show the form
    setClassData(null); // Clear any existing class data
  };

  const handleSubmitClass = (e) => {
    e.preventDefault();
    const newClass = {
      classtype: "Live Class", // Hardcoded or dynamic input
      course: subject,
      tutor: "Aftab Qureshi", // You can adjust this field as per the form input
      time: dateTime.split("T")[1], // Extract time from datetime-local input
      date: dateTime.split("T")[0], // Extract date from datetime-local input
      language: "English", // Hardcoded or dynamic input
      description,
    };
    setClassData(newClass); // Set the class data for preview
    setShowForm(false); // Hide the form
  };

  return (
    <div className="w-full h-full p-1">
      <h2 className="text-4xl font-semibold">My Classes</h2>

      {showForm ? (
        // If showForm is true, show the form
        <div className="w-full flex flex-col items-center justify-start p-3">
          <h3 className="text-3xl font-semibold mb-5">Schedule a Class</h3>
          <form onSubmit={handleSubmitClass} className="space-y-4 w-[40%]">
            <div>
              <label className="block text-md">Add Class Name</label>
              <input
                type="text"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                placeholder="Enter class name"
                className="w-full outline-none p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-md">Add Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter here"
                className="w-full outline-none p-2 border rounded-md"
              />
            </div>

            {/* Combined Date and Time input */}
            <div>
              <label className="block text-md">Date & Time</label>
              <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                className="w-full outline-none p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-md">Add Banner Image</label>
              <div
                className="cursor-pointer p-2 flex items-center justify-center gap-2 bg-yellow-300 text-md rounded-md"
                onClick={handleDivClick}
              >
                <MdOutlineFileDownload className="text-2xl" />
                Add here
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              {bannerImage && (
                <div className="mt-2">
                  <img
                    src={URL.createObjectURL(bannerImage)}
                    alt="Uploaded banner"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <p>{bannerImage.name}</p> {/* Show selected file name */}
                </div>
              )}
            </div>
            <div>
              <label className="block text-md">Write a Short Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full outline-none p-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                type="submit"
                className="bg-yellow-300 w-full text-lg font-semibold px-6 py-2 rounded-md"
              >
                Schedule Class
              </button>
            </div>
          </form>
        </div>
      ) : classData ? (
        // If classData is available, show the preview
        <div className="w-full flex flex-col items-center justify-start p-3">
          <h3 className="text-3xl font-semibold mb-5">Class Preview</h3>
          <Card {...classData} />
          <div className="w-full mt-5">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-3xl font-bold">Description</h1>
              <button
                onClick={() => setShowForm(true)} // Trigger editing
                className="bg-yellow-200 p-2 flex items-center justify-center rounded-md"
              >
                <FaRegEdit className="text-2xl"/>
              </button>
            </div>
            <p className="text-lg">{classData.description}</p>
          </div>
          <div className="flex justify-end w-full mt-4">
            <button
              onClick={() => {
                CLASSES.push(classData); // Add the new class to the upcoming classes list
                setClassData(null); 
              }}
              className="w-full bg-yellow-400 text-xl font-semibold px-6 py-2 rounded-md"
            >
              Create Class
            </button>
          </div>
        </div>
      ) : (
        // If no form is showing, show the regular content
        <div className="w-full h-[93%] flex items-center justify-between mt-2">
          <div className="left w-[48%] h-full overflow-clip p-2">
            <div className="flex space-x-4 mb-6">
              <button
                className={`px-4 py-2 rounded-lg text-xl ${tab === "upcoming" ? "underline underline-offset-2" : "opacity-80"}`}
                onClick={() => setTab("upcoming")}
              >
                Upcoming Classes
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-xl ${tab === "recorded" ? "underline underline-offset-2" : "opacity-80"}`}
                onClick={() => setTab("recorded")}
              >
                Recorded Classes
              </button>
            </div>

            {tab === "upcoming" ? (
              <div className="flex flex-col w-full h-[70.5vh] overflow-hidden  -mt-5 overflow-y-auto p-2 py-12">
                {CLASSES.length > 0 ? (
                  CLASSES.map((classItem, index) => (
                    <Card
                      key={index}
                      classtype={classItem.classtype}
                      language={classItem.language}
                      time={classItem.time}
                      date={classItem.date}
                      course={classItem.course}
                      tutor={classItem.tutor}
                      attendees={classItem.attendees}
                    />
                  ))
                ) : (
                  <p className="text-center text-gray-500">No upcoming classes</p>
                )}
              </div>
                ) : (
                    
                    <div className="flex flex-col w-full h-[70.5vh] overflow-hidden  -mt-5 overflow-y-auto p-2 py-12">

                      <RecordedCard />

                    </div>
            )}
          </div>

          <div
            className="right w-[48%] h-full flex items-center justify-center flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <h1 className="text-4xl font-bold capitalize">Schedule class</h1>
            <button
              onClick={handleScheduleClassClick} // Trigger the form visibility
              className="schedule_class_btn flex items-center justify-center gap-2 p-2 text-xl w-[80%] font-medium mt-2 bg-yellow-400 cursor-pointer rounded-md"
            >
              Create a class
            </button>
            <Calendar mode="single" selected={date} onDateChange={setDate} className="mt-5" />
          </div>
        
        </div>
      )}
    </div>
  );
}

export default MyClassesContent;

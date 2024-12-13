import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";

function ProfileContent() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <main
      className=" w-full h-full z-10 bg-yellow-100 bg-opacity-60 flex items-center justify-center"
      role="main"
      aria-label="Profile Page"
    >
      <section
        className="w-full max-w-lg flex flex-col items-center"
        aria-label="Profile Form Section"
      >
        {/* Image Upload Circle */}
        <div className="relative md:mb-2 mt-80 lg:mt-0 md:mt-0 lg:mb-2">
          <div className="w-28 h-28 rounded-full  flex items-center justify-center overflow-hidden bg-cyan-500">
            {image ? (
              <img
                src={image}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="flex items-center justify-center">
                <IoPersonOutline className="text-6xl text-cyan-300" />
              </span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageUpload}
            aria-label="Upload Profile Picture"
          />
        </div>
        <p className=" text-sm md:text-md text-gray-600">
          Add your profile picture
        </p>
        <header className="text-center">
          <h1 className="capitalize text-3xl md:text-4xl font-bold">
            Add profile
          </h1>
          <p className="mt-1 text-sm md:text-md text-gray-600">
            Complete your profile to get started.
          </p>
        </header>

        {/* Form */}
        <form
          action=""
          className="w-[60vw]  flex flex-col"
          aria-label="Profile Form"
        >
          {/* Fullname and School Row */}
          <div className="flex  flex-col lg:flex-row gap-1 lg:gap-4 mb-4">
            <label htmlFor="fullname" className="flex-1">
              <span className="block font-semibold text-lg mb-1">Fullname</span>
              <input
                id="fullname"
                type="text"
                className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2"
                placeholder="Enter your name"
                aria-label="Fullname"
                required
              />
            </label>

            <label htmlFor="school" className="flex-1">
              <span className="block font-semibold text-lg mb-1">School</span>
              <input
                id="school"
                type="text"
                className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2"
                placeholder="Enter your school"
                aria-label="School"
                required
              />
            </label>
          </div>

          {/* Email and Class Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <label htmlFor="email" className="flex-1">
              <span className="block font-semibold text-lg mb-1">Email</span>
              <input
                id="email"
                type="email"
                className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2"
                placeholder="Enter your email"
                aria-label="Email"
                required
              />
            </label>

            <label htmlFor="class" className="flex-1">
              <span className="block font-semibold text-lg mb-1">Class</span>
              <input
                id="class"
                type="text"
                className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2"
                placeholder="Enter your class"
                aria-label="Class"
                required
              />
            </label>
          </div>

          {/* Phone Number and Medium Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <label htmlFor="phone" className="flex-1">
              <span className="block font-semibold text-lg mb-1">Phone</span>
              <input
                id="phone"
                type="text"
                className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2"
                placeholder="Enter your phone number"
                aria-label="Phone"
                required
              />
            </label>

            <label htmlFor="medium" className="flex-1">
              <span className="block font-semibold text-lg mb-1">Medium</span>
              <input
                id="medium"
                type="text"
                className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2"
                placeholder="Enter your medium"
                aria-label="Medium"
                required
              />
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-yellow-500 text-2xl font-semibold rounded-md transition-colors "
            aria-label="Update Profile"
          >
            Continue
          </button>
        </form>
      </section>
    </main>
  );
}

export default ProfileContent;

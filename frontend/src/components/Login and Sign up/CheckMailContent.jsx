import React from "react";
import { IoMdMailUnread } from "react-icons/io";

function CheckMailContent() {
  return (
    <main
      className="absolute w-full h-full top-0 z-10 bg-yellow-100 bg-opacity-60 flex flex-col items-center justify-center px-4"
      role="main"
      aria-label="Check Email Page"
    >
      {/* Email Icon Section */}
      <section
        className="square w-20 h-20 bg-blue-900 rounded-md flex items-center justify-center"
        aria-hidden="true"
      >
        <IoMdMailUnread className="text-white text-5xl" aria-hidden="true" />
      </section>

      {/* Content Section */}
      <header className="text-center mt-5">
        <h1 className="capitalize text-3xl md:text-5xl font-bold">
          Check Your Email
        </h1>
        <p className="mt-3 text-sm md:text-lg lg:text-md max-w-md mx-auto">
          We've sent instructions to recover your password to the email address
          you provided. Please check your inbox.
        </p>
      </header>

      {/* Done Button */}
      <button
        type="button"
        className="w-full max-w-md rounded-md mt-7 h-14 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center transition-colors"
        aria-label="Return to Login"
      >
        <span className="text-lg font-semibold">Done</span>
      </button>
    </main>
  );
}

export default CheckMailContent;

import React from "react";

function NewPasswordContent() {
  return (
    <main
      className="absolute w-full h-full z-10 bg-yellow-100 bg-opacity-60 flex items-center justify-center px-4"
      role="main"
      aria-label="New Password Page"
    >
      {/* Content Section */}
      <section
        className="w-full max-w-lg flex flex-col items-center justify-center"
        aria-label="New Password Form Section"
      >
        <header className="text-center mb-4">
          <h1 className="capitalize text-3xl md:text-5xl font-bold">
            Enter New Password
          </h1>
          <p className="mt-3 text-sm md:text-lg text-gray-600">
            Please enter the new password sent to your email.
          </p>
        </header>

        <form className="w-full flex flex-col" aria-label="New Password Form">
          {/* New Password Input */}
          <label htmlFor="new-password" className="mb-4">
            <span className="block font-semibold text-lg mb-1">
              New Password
            </span>
            <input
              id="new-password"
              type="password"
              className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your new password"
              aria-label="New Password Input"
              required
            />
          </label>

          {/* Confirm Password Input */}
          <label htmlFor="confirm-password" className="mb-4">
            <span className="block font-semibold text-lg mb-1">
              Confirm Password
            </span>
            <input
              id="confirm-password"
              type="password"
              className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Re-enter your new password"
              aria-label="Confirm Password Input"
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 mt-6 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md transition-colors"
            aria-label="Submit New Password"
          >
            Continue
          </button>
        </form>
      </section>
    </main>
  );
}

export default NewPasswordContent;

import React from "react";

function ForgotPasswordContent() {
  return (
    <main
      className="absolute w-full h-full bg-yellow-100 bg-opacity-60 flex flex-col items-center justify-between z-10"
      role="main"
      aria-label="Forgot Password Page"
    >
      {/* Content Section */}
      <section
        className="h-full w-full flex flex-col items-center justify-center"
        aria-label="Forgot Password Form Section"
      >
        <header>
          <h1 className="capitalize md:text-6xl text-4xl lg:text-5xl font-bold">
            Forgot Password
          </h1>
        </header>
        <p className="lg:text-md md:text-lg md:w-[80%] text-sm text-center w-[90%] lg:w-[85%] mt-3">
          You will receive an email to reset your password.
        </p>
        <form
          aria-label="Forgot Password Form"
          className="mt-4 w-full flex flex-col items-center"
        >
          {/* Email Input */}
          <label htmlFor="email" className="w-full lg:w-[33vw] mb-2">
            <h2 className="font-semibold text-xl">Email</h2>
            <input
              id="email"
              type="email"
              className="w-full h-12 rounded-md outline-none text-lg pl-3"
              placeholder="Enter your email"
              aria-label="Email Input"
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full lg:w-[33vw] rounded-md mt-7 h-14 bg-yellow-500 flex items-center justify-center transition-colors"
            aria-label="Submit Forgot Password Request"
          >
            <span className="text-lg font-semibold">Submit</span>
          </button>
        </form>
      </section>
    </main>
  );
}

export default ForgotPasswordContent;

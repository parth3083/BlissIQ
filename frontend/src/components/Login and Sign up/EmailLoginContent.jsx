import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/email_login.webp";

function EmailLoginContent() {
  return (
    <main
      className="absolute w-full h-full bg-yellow-100 bg-opacity-60 flex lg:flex-row flex-col items-center justify-between z-10"
      role="main"
      aria-label="Email Login Page"
    >
      {/* Left Decorative Section */}
      <section className="hidden lg:block h-full w-[35%]" aria-hidden="true">
        <img
          src={image1}
          className="w-full h-full object-contain object-center scale-110"
          alt="Decorative email illustration"
        />
      </section>

      {/* Right Content Section */}
      <section
        className="h-full w-full lg:w-[65%] flex flex-col items-center justify-center"
        aria-label="Login Form Section"
      >
        <header>
          <h1 className="capitalize md:text-6xl text-4xl lg:text-5xl font-bold">
            Hello!
          </h1>
        </header>
        <p className="lg:text-md md:text-lg md:w-[80%] text-sm text-center w-[90%] lg:w-[85%] mt-3">
          Enter your correct email and password to log in to your account.
        </p>
        <form
          aria-label="Email Login Form"
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
              aria-label="Email"
              required
            />
          </label>

          {/* Password Input */}
          <label htmlFor="password" className="w-full lg:w-[33vw] mb-2">
            <h2 className="font-semibold text-xl mt-2">Password</h2>
            <input
              id="password"
              type="password"
              className="w-full h-12 rounded-md outline-none text-lg pl-3"
              placeholder="Enter your password"
              aria-label="Password"
              required
            />
          </label>
          <Link
            to="/email-login/forgot-password"
            className="text-md text-right mt-1 w-full lg:w-[33vw] text-base"
          >
            Forgot password?
          </Link>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full lg:w-[33vw] rounded-md mt-7 h-14 gap-3 bg-yellow-500 flex items-center justify-center"
            aria-label="Log in"
          >
            <span className="text-lg font-semibold">Log in</span>
          </button>
        </form>

        <footer className="mt-3 text-sm md:text-lg lg:text-lg">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="font-bold">
              Sign Up
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
}

export default EmailLoginContent;

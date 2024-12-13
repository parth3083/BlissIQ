import React from "react";
import { Link } from "react-router-dom";

function SignUpContent() {
  return (
    <main
      className="absolute w-full h-full z-10 bg-yellow-100 bg-opacity-60 flex items-center justify-center px-4"
      role="main"
      aria-label="Sign Up Page"
    >
      {/* Content Section */}
      <section
        className="w-full max-w-lg flex flex-col items-center"
        aria-label="Sign Up Form Section"
      >
        <header className="mb-4">
          <h1 className="capitalize text-3xl md:text-5xl font-bold">
            Create Your Account
          </h1>
          <p className="mt-3 text-sm md:text-lg text-gray-600">
            Enter your credentials to create a new account.
          </p>
        </header>

        <form className="w-full flex flex-col" aria-label="Sign Up Form">
          {/* Fullname and Email Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <InputField
              id="fullname"
              label="Fullname"
              type="text"
              placeholder="Enter your name"
              ariaLabel="Fullname"
            />
            <InputField
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              ariaLabel="Email"
            />
          </div>

          {/* Password and Confirm Password Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <InputField
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              ariaLabel="Password"
            />
            <InputField
              id="confirm-password"
              label="Confirm Password"
              type="password"
              placeholder="Re-enter your password"
              ariaLabel="Confirm Password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-yellow-500 font-semibold rounded-md transition-colors"
            aria-label="Create Account"
          >
            Create
          </button>
        </form>

        <footer className="mt-4 text-sm md:text-lg text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              Log In
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
}

const InputField = ({ id, label, type, placeholder, ariaLabel }) => (
  <label htmlFor={id} className="flex-1">
    <span className="block font-semibold text-lg mb-1">{label}</span>
    <input
      id={id}
      type={type}
      className="w-full h-12 px-3 border rounded-md text-lg outline-none focus:ring-2"
      placeholder={placeholder}
      aria-label={ariaLabel}
      required
    />
  </label>
);

export default SignUpContent;

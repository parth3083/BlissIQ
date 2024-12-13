import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import image1 from "../../assets/email_png.webp";

function LoginContent() {
  return (
    <main
      className="absolute w-full h-full bg-yellow-100 bg-opacity-60 flex lg:flex-row flex-col items-center justify-between z-10"
      role="main"
      aria-label="Login Options Page"
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
        aria-label="Login Options Section"
      >
        <header>
          <h1 className="capitalize md:text-6xl text-4xl lg:text-5xl font-bold">
            Get Started
          </h1>
        </header>
        <p className="lg:text-md md:text-lg md:w-[80%] text-sm text-center w-[90%] lg:w-[85%] mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          nemo at inventore odio dolores hic odit, labore alias explicabo ex?
        </p>

        {/* Continue with Email */}
        <Link
          to="/email-login"
          className="w-[80vw] lg:w-[33vw] rounded-md mt-5 h-14 gap-3 bg-yellow-500 flex items-center justify-center hover:shadow-lg transition-all ease-linear duration-100"
          aria-label="Continue with Email"
        >
          <MdOutlineMailOutline className="text-lg" aria-hidden="true" />
          <span className="text-lg font-semibold">Continue with Email</span>
        </Link>

        {/* Continue with Google */}
        <button
          type="button"
          className="w-[80vw] lg:w-[33vw] rounded-md mt-3 h-14 border flex items-center justify-center gap-3 border-yellow-500 hover:shadow-lg transition-all ease-linear duration-100 "
          aria-label="Continue with Google"
        >
          <FaGoogle className="text-lg" aria-hidden="true" />
          <span className="text-lg font-semibold">Continue with Google</span>
        </button>

        <footer className="mt-3 text-sm md:text-lg lg:text-lg">
          <p>
            Don’t have an account?{" "}
            <Link to="/signup" className="font-bold">
              Sign Up
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
}

export default LoginContent;

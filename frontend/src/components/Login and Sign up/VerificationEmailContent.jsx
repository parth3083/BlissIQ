import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VerificationEmailContent() {
  const [timer, setTimer] = useState(59);
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  // Countdown timer logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  // Handle individual square input
  const handleInputChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only digits
    if (value.length === 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Automatically move focus to the next input
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    }
  };

  // Handle backspace and navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newCode = [...code];

      // Clear the current input and focus the previous one if empty
      if (!code[index] && e.target.previousSibling) {
        e.target.previousSibling.focus();
      } else {
        newCode[index] = ""; // Clear the current input
        setCode(newCode);
      }
    }
  };

  const handleResendCode = () => {
    setTimer(59); // Reset timer to 59 seconds
    setCode(["", "", "", "", "", ""]); // Clear the code input
    alert("Verification code resent to your email.");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted code: ${code.join("")}`);
  };

  return (
    <main
      className="absolute w-full h-full z-10 bg-yellow-100 bg-opacity-60 flex items-center justify-center px-4"
      role="main"
      aria-label="Email Verification Page"
    >
      {/* Content Section */}
      <section
        className="w-full max-w-lg flex flex-col items-center "
        aria-label="Verification Section"
      >
        <header className="text-center mb-4">
          <h1 className="capitalize text-3xl md:text-5xl font-bold">
            Verify Your Email
          </h1>
          <p className="mt-3 text-sm md:text-lg text-gray-600">
            We've sent a verification code to your email:{" "}
            <span className="font-bold text-gray-800">test@gmail.com</span>
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
          aria-label="Verification Form"
        >
          {/* Verification Code Squares */}
          <div className="flex justify-center gap-2 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => handleInputChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength="1"
                className="w-12 h-12 text-lg text-center border rounded-md focus:ring-2 focus:ring-yellow-500 outline-none"
                aria-label={`Verification Code Digit ${index + 1}`}
              />
            ))}
          </div>

          {/* Timer and Resend Code Button */}
          <div className="w-full flex justify-between items-center mb-4">
            <span className="text-sm md:text-lg text-gray-500">
              {timer > 0
                ? `Resend code in 00:${timer < 10 ? `0${timer}` : timer}`
                : "You can resend the code now."}
            </span>
            <button
              type="button"
              onClick={handleResendCode}
              className={`font-semibold ${
                timer > 0 ? "opacity-50 cursor-not-allowed" : "hover:underline"
              }`}
              disabled={timer > 0}
              aria-label="Resend Code"
            >
              Resend Code
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-12 bg-yellow-500 text-xl font-semibold rounded-md transition-colors"
            aria-label="Verify Code"
          >
            Verify
          </button>
        </form>
      </section>
    </main>
  );
}

export default VerificationEmailContent;

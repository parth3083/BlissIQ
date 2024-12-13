import React from "react";
import CircleElements from "./CircleElements";
import LoginContent from "./LoginContent";
import EmailLoginContent from "./EmailLoginContent";
import ForgotPasswordContent from "./ForgotPasswordContent";
import CheckMailContent from "./CheckMailContent";
import NewPasswordContent from "./NewPasswordContent";
import SignUpContent from "./SignUpContent";
import VerificationEmailContent from "./VerificationEmailContent";

function CardElement({ className }) {
  const renderContent = () => {
    const path = window.location.pathname;
    switch (path) {
      case "/login":
        return <LoginContent />;
      case "/email-login":
        return <EmailLoginContent />;
      case "/email-login/forgot-password":
        return <ForgotPasswordContent />;
      case "/email-login/check-mail":
        return <CheckMailContent />;
      case "/new-password":
        return <NewPasswordContent />;
      case "/signup":
        return <SignUpContent />;
      case "/verification-email":
        return <VerificationEmailContent />;
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <div
      className={`card lg:w-[60vw] w-[85vw] md:w-[90vw] md:h-[110vw] h-[140vw] lg:h-[32vw] rounded-2xl relative overflow-hidden shadow-2xl ${className}`}
    >
      <CircleElements />
      {renderContent()}
    </div>
  );
}

export default CardElement;

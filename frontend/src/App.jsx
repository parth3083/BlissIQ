import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import EmailLogin from "./pages/EmailLogin";
import ForgotPassword from "./pages/ForgotPassword";
import CheckMail from "./pages/CheckMail";
import NewPassword from "./pages/NewPassword";
import SignUp from "./pages/Signup";
import VerificationEmail from "./pages/VerificationEmail";
import Home from "./pages/Home";
import MaxWidth from "./components/MaxWidth";
import MyClassesContent from "./components/Myclasses/MyClassesContent";
import MyClasses from "./pages/MyClasses";
import HelpAndSupport from "./pages/HelpAndSupport";
import Test from "./pages/Test";
import Courses from "./pages/Courses";
import Chats from "./pages/Chats";
import Notifications from "./pages/Notifications";
import Student from "./pages/Student";
import Profile from "./pages/Profile";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard-home"
          element={
            <MaxWidth>
              <Home />
            </MaxWidth>
          }
        />
        <Route
          path="/my-classes"
          element={
            <MaxWidth>
              <MyClasses />
            </MaxWidth>
          }
        />
        <Route
          path="/tests"
          element={
            <MaxWidth>
              <Test />
            </MaxWidth>
          }
        />
        <Route
          path="/courses"
          element={
            <MaxWidth>
              <Courses />
            </MaxWidth>
          }
        />
        <Route
          path="/notifications"
          element={
            <MaxWidth>
              <Notifications />
            </MaxWidth>
          }
        />
        <Route
          path="/students/:id"
          element={
            <MaxWidth>
              <StudentDetails />
            </MaxWidth>
          }
        />
        <Route
          path="/profile"
          element={
            <MaxWidth>
              <Profile />
            </MaxWidth>
          }
        />
        <Route
          path="/students"
          element={
            <MaxWidth>
              <Student />
            </MaxWidth>
          }
        />
        <Route
          path="/chats"
          element={
            <MaxWidth>
              <Chats />
            </MaxWidth>
          }
        />
        <Route
          path="/help-support"
          element={
            <MaxWidth>
              <HelpAndSupport />
            </MaxWidth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/email-login" element={<EmailLogin />} />
        <Route
          path="/email-login/forgot-password"
          element={<ForgotPassword />}
        />
        <Route path="/email-login/check-mail" element={<CheckMail />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verification-email" element={<VerificationEmail />} />
      </Routes>
    </>
  );
}

export default App;


{/* */}
// eslint-disable-next-line no-unused-vars
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserHomepage from "./pages/user/Homepage"
import TutorHomepage from "./pages/tutor/homepage"
import YourChoice from "./pages/user/YourChoice"
import Courses from "./pages/tutor/Courses"
import AddCourse from "./pages/tutor/AddCourse"
import DemoRequests from "./pages/tutor/DemoRequests"
import Classes from "./pages/tutor/Classes"
import ClassesRequests from "./pages/tutor/ClassesRequests"
import Analytics from "./pages/tutor/Analytics"
import FindTutor from "./pages/user/FindTutor"
import ViewCourses from "./pages/user/ViewCourses"
import MyAccount from "./pages/user/MyAccount"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Landing from "./pages/Landing"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* tutor  */}
        <Route path="/tutor/dashboard" element={<TutorHomepage />} />
        <Route path="/tutor/courses" element={<Courses />} />
        <Route path="/tutor/add-course" element={<AddCourse />} />
        <Route path="/tutor/demo-requests" element={<DemoRequests />} />
        <Route path="/tutor/classes" element={<Classes />} />
        <Route path="/tutor/classes-requests" element={<ClassesRequests />} />
        <Route path="/tutor/analytics" element={<Analytics />} />

        {/* user  */}
        <Route path="/home" element={<UserHomepage />} />
        <Route path="/choose-you-like" element={<YourChoice />} />
        <Route path="/find-tutors" element={<FindTutor />} />
        <Route path="/courses" element={<ViewCourses />} />
        <Route path="/my-account/dashboard" element={<MyAccount />} />
      </Routes>
    </Router>
  )
}

export default App

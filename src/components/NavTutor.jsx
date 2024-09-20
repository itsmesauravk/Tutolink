// eslint-disable-next-line no-unused-vars
import React from "react"
import Logo from "./Logo"
import Avatar from "@mui/material/Avatar"
import { deepOrange } from "@mui/material/colors"
import { Link } from "react-router-dom"

const NavTutor = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 w-full bg-white shadow-md text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">
            <Logo />
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/tutor/dashboard" className="mr-5 hover:text-gray-900">
            Dashboard{" "}
          </Link>
          <Link to="/tutor/courses" className="mr-5 hover:text-gray-900">
            Courses{" "}
          </Link>
          <Link to="/tutor/add-course" className="mr-5 hover:text-gray-900">
            Add Course{" "}
          </Link>
        </nav>
        <div>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>SK</Avatar>
        </div>
      </div>
    </header>
  )
}

export default NavTutor

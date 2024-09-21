// eslint-disable-next-line no-unused-vars
import React from "react"
import Logo from "./Logo"
import Avatar from "@mui/material/Avatar"
import { deepOrange } from "@mui/material/colors"
import { Link } from "react-router-dom"

const NavUser = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 w-full bg-white shadow-md text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">
            <Logo />
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/home"
            className="mr-5 hover:text-primaryDark font-semibold"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="mr-5  font-semibold hover:text-primaryDark"
          >
            Courses
          </Link>

          {/* find tutors */}
          <Link
            to="/find-tutors"
            className="mr-5  font-semibold hover:text-primaryDark"
          >
            Find Tutor ?
          </Link>
        </nav>
        <div>
          <Link to={"/my-account/dashboard"}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>SK</Avatar>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NavUser

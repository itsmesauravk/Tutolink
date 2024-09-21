// eslint-disable-next-line no-unused-vars
import React from "react"
import { SiSololearn } from "react-icons/si"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to={"/home"} className="flex items-center space-x-2">
      <span className="font-bold text-2xl text-primaryDark">TutoLink</span>
      <SiSololearn className="w-6 h-6 text-primaryDark" />
    </Link>
  )
}

export default Logo

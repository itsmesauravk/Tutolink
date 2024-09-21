// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react"
import { gsap } from "gsap"
import { Link } from "react-router-dom"

const Landing = () => {
  useEffect(() => {
    // GSAP animation for text and buttons
    gsap.fromTo(
      ".animate",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      }
    )
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primaryLight text-center">
      <h1 className="text-6xl font-extrabold text-primaryDark mb-4 animate">
        Welcome to TutoLink
      </h1>
      <p className="text-2xl text-primaryDark mb-8 animate">
        The best place to find tutors of your choice
      </p>

      <div className="relative mb-8">
        <div className="line h-1 bg-primaryDark mb-2 animate"></div>
        <div className="line h-1 bg-primaryDark mb-2 animate"></div>
        <div className="line h-1 bg-primaryDark mb-2 animate"></div>
      </div>

      <div className="flex flex-col space-y-4">
        <Link to={"/login"} className="transition animate">
          <button className="bg-primary text-white rounded px-6 py-3 hover:bg-primaryDark font-semibold ">
            Login to Continue
          </button>
        </Link>
        <Link to={"/register"} className="transition animate">
          <button className="border border-primary text-primary rounded px-6 py-3 font-semibold hover:bg-primary hover:text-white ">
            Want to join as a Tutor?
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Landing

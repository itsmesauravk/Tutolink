// eslint-disable-next-line no-unused-vars
import React from "react"

const BecomeTutor = () => {
  return (
    <section className="  p-8 mt-8 flex flex-col lg:flex-row items-center gap-8">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">
          Want to Teach, Join Us And Make A Difference !!
        </h2>
        <p className="text-gray-600 mb-6">
          Join our community of educators and make a difference. Share your
          expertise and help students achieve their goals while growing your own
          teaching career.
        </p>
        <button className="bg-main text-primaryDark shadow-lg py-3 px-6 rounded-lg font-semibold transition-transform hover:bg-main-dark focus:outline-none focus:ring-2 focus:ring-main-dark focus:ring-opacity-50">
          Become an Instructor
        </button>
      </div>
      <div className="flex-1 flex justify-center lg:justify-end">
        <img
          src="/images/becometutor.png"
          alt="Become an Instructor"
          className="max-w-32 lg:max-w-md max-h-96 rounded-lg object-cover "
        />
      </div>
    </section>
  )
}

export default BecomeTutor

// eslint-disable-next-line no-unused-vars
import React from "react"
import { MdOutlineOndemandVideo } from "react-icons/md"
import { LuUsers } from "react-icons/lu"
import { PiChalkboardTeacher } from "react-icons/pi"
import { CgMenuBoxed } from "react-icons/cg"

const BasicStats = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Unlock Your Learning Potential
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover a world of knowledge at your fingertips. From coding to
            creative arts, our platform offers a diverse range of courses
            designed to inspire and empower learners. Join a community of
            passionate individuals and embark on your journey to mastery today!
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="flex flex-col justify-center items-center gap-2  px-4 py-6 rounded-lg">
              <MdOutlineOndemandVideo className="w-12 h-12 text-primaryDark" />
              <div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">Videos</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="flex flex-col justify-center items-center gap-2   px-4 py-6 rounded-lg">
              <CgMenuBoxed className="w-12 h-12 text-primaryDark" />
              <div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  10+
                </h2>
                <p className="leading-relaxed">Categories</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="flex flex-col justify-center items-center gap-2  px-4 py-6 rounded-lg">
              <PiChalkboardTeacher className="w-12 h-12 text-primaryDark" />
              <div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  74+
                </h2>
                <p className="leading-relaxed">Tutors</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="flex flex-col justify-center items-center gap-2  px-4 py-6 rounded-lg">
              <LuUsers className="w-12 h-12 text-primaryDark" />
              <div>
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.2k+
                </h2>
                <p className="leading-relaxed">User</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BasicStats

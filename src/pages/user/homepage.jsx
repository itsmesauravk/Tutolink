// eslint-disable-next-line no-unused-vars
import React from "react"
import NavUser from "../../components/NavUser"
import HomeLanding from "../../components/HomeLanding"
import Recommended from "../../components/Recommended"
import BasicStats from "../../components/BasicStats"
import BecomeTutor from "../../components/BecomeTutor"
import Footer from "../../components/Footer"
import Floating from "../../components/Floating" // Import the floating button component
import Popular from "../../components/Popular"
import { Link } from "react-router-dom"
import CustomerCare from "../../components/CustomerCare"

const UserHomepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen relative">
      {/* Navigation Bar */}
      <header className="shadow-sm bg-white">
        <NavUser />
      </header>
      {/* Main Content */}
      <main className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        {/* Home Landing Section */}
        <section className="mb-16">
          <HomeLanding />
        </section>

        {/* Recommended Section */}
        <section className="p-8">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Recommended For You
            </h1>
            <Link
              to="/courses"
              className="text-primary font-semibold underline"
            >
              View All Recommendations
            </Link>
          </div>
          <Recommended />
        </section>

        {/* Basic Details Section */}
        <section className="p-8">
          <BasicStats />
        </section>

        {/* Recommended Section */}
        <section className="p-8">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">
              Popular Courses
            </h1>
            <Link
              to="/courses"
              className="text-primary font-semibold underline"
            >
              View All Courses
            </Link>
          </div>

          <Popular />
        </section>

        {/* Become Tutor Section */}
        <section className="p-8">
          <BecomeTutor />
        </section>

        {/* Footer Section */}
        <Footer />
      </main>
      {/* Floating Chat Button */}
      <Floating />
      <CustomerCare />
    </div>
  )
}

export default UserHomepage

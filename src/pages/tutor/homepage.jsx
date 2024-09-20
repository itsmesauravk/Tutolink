// eslint-disable-next-line no-unused-vars
import React from "react"
import { Avatar } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import NavTutor from "../../components/NavTutor"
import Footer from "../../components/Footer"
import Card from "../../components/Card"

// Sample JSON data for courses
const cardData = [
  {
    title: "The Catalyzer",
    category: "Science",
    author: "John Doe",
    imageSrc: "/images/videotest.png",
    views: 1.5,
    comments: 8,
  },
  {
    title: "Neural Networks 101",
    category: "AI & ML",
    author: "Jane Smith",
    imageSrc: "/images/videotest.png",
    views: 2.3,
    comments: 12,
  },
  {
    title: "React Best Practices",
    category: "Web Development",
    author: "David Lee",
    imageSrc: "/images/videotest.png",
    views: 0.9,
    comments: 4,
  },
  {
    title: "Cryptography Explained",
    category: "Cybersecurity",
    author: "Alice Johnson",
    imageSrc: "/images/videotest.png",
    views: 3.1,
    comments: 15,
  },
]

const TutorHomepage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <NavTutor />

      {/* Header Section */}
      <header className="flex items-center mb-6">
        <Avatar sx={{ bgcolor: deepOrange[500] }} className="mr-4">
          SK
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Welcome, Tutor!</h1>
          <p className="text-gray-600">
            Inspire and educate the next generation.
          </p>
        </div>
      </header>

      {/* Dashboard */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg">
            <h3 className="text-lg font-bold">Upcoming Classes</h3>
            <p className="text-gray-600">No upcoming classes scheduled.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <h3 className="text-lg font-bold">Students</h3>
            <p className="text-gray-600">Total Students: 25</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg">
            <h3 className="text-lg font-bold">Ratings</h3>
            <p className="text-gray-600">Average Rating: 4.8</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3 className="text-lg font-bold">Feedback</h3>
            <p className="text-gray-600">New Feedback Received: 3</p>
          </div>
        </div>
      </section>

      {/* Student Interaction */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Student Interaction</h2>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg">Recent Messages</h3>
          <button className="text-blue-500">View All</button>
        </div>
        <p className="text-gray-600">No new messages.</p>
      </section>

      {/* Course Management */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">My Latest Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              category={data.category}
              author={data.author}
              imageSrc={data.imageSrc}
              views={data.views}
              comments={data.comments}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            View All Courses
          </button>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Resources</h2>
        <p className="text-gray-600">
          Check out these helpful materials for your teaching.
        </p>
        <ul className="mt-2 list-disc ml-6">
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Teaching Strategies
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Effective Communication
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Engaging Students
            </a>
          </li>
        </ul>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default TutorHomepage

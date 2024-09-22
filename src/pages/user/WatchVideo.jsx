// eslint-disable-next-line no-unused-vars
import React from "react"
import { FaThumbsUp, FaComment, FaStar } from "react-icons/fa"
import NavUser from "../../components/NavUser"
import Footer from "../../components/Footer"
import Card from "../../components/Card"

// Sample similar videos data
const similarVideos = [
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
  {
    title: "The Future of Quantum Computing",
    category: "Technology",
    author: "Mark Evans",
    imageSrc: "/images/videotest.png",
    views: 2.8,
    comments: 10,
  },
]

const WatchVideo = () => {
  return (
    <div>
      <NavUser />
      <div className="bg-gray-50 min-h-screen pt-32">
        <div className="max-w-screen-xl mx-auto py-8 px-4 flex flex-col lg:flex-row lg:space-x-8">
          {/* First Part: Video and Description in a Row */}
          <div className="lg:w-2/3 w-full flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Video */}
            <div className="w-full lg:w-2/3 relative pb-9/16 h-0 overflow-hidden rounded-lg shadow-lg bg-gray-900">
              <img
                src="/images/video-thumbnail.jpg"
                alt="Introduction to AI & Machine Learning"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>

            {/* Video Description */}
            <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-lg">
              <h1 className="text-xl font-bold text-gray-800 mb-4">
                Introduction to AI & Machine Learning
              </h1>
              <p className="text-gray-600 text-sm">
                This video covers the basics of AI & Machine Learning,
                explaining the fundamental concepts and giving an overview of
                the different applications of AI in real-world scenarios.
              </p>
            </div>
          </div>

          {/* Second Part: Video Details (Column Layout) */}
          <div className="lg:w-1/3 w-full space-y-6">
            {/* Video title and controls */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Introduction to AI & Machine Learning
              </h2>

              {/* Video controls: Likes, Comments, Rating */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-primary hover:scale-105 transition-transform">
                    <FaThumbsUp className="text-xl" />
                    <span>1.5K Likes</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-700 hover:text-primary hover:scale-105 transition-transform">
                    <FaComment className="text-xl" />
                    <span>120 Comments</span>
                  </button>
                </div>

                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Rating:</span>
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={`text-2xl ${
                        index < 4 ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">4.0</span>
                </div>
              </div>
            </div>

            {/* User profile small section */}
            <div className="flex items-center bg-white p-5 rounded-lg shadow-lg">
              <img
                src="/images/user-avatar.jpg" // Replace with actual avatar
                alt="User Avatar"
                className="w-16 h-16 rounded-full border-2 border-primary"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500">Posted on Aug 20, 2024</p>
              </div>
              <button className="ml-auto bg-primary text-white px-6 py-2 rounded-lg hover:bg-primaryHover transition-all">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Third Part: Similar Video Recommendations */}
        <div className="max-w-screen-xl mx-auto py-8 px-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Similar Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {similarVideos.map((video, index) => (
              <Card
                key={index}
                title={video.title}
                category={video.category}
                author={video.author}
                imageSrc={video.imageSrc}
                views={video.views}
                comments={video.comments}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WatchVideo

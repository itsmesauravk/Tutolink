// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import NavUser from "../../components/NavUser"
import CustomCard from "../../components/Card" // Assuming your custom card is located here
import Footer from "../../components/Footer"

// Sample JSON data for 5 cards
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
  {
    title: "The Future of Quantum Computing",
    category: "Technology",
    author: "Mark Evans",
    imageSrc: "/images/videotest.png",
    views: 2.8,
    comments: 10,
  },
]

const ViewCourses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Science",
    "AI & ML",
    "Web Development",
    "Cybersecurity",
    "Technology",
  ]

  const filteredData =
    selectedCategory === "All"
      ? cardData
      : cardData.filter((course) => course.category === selectedCategory)

  return (
    <div className="bg-gray-50 min-h-screen">
      <NavUser />

      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-12">
        {/* Category Filter */}
        <div className="my-5">
          <h2 className="text-lg font-semibold">Filter by Category</h2>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="m-2 p-2 bg-primary text-white rounded hover:bg-primaryHover"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((data, index) => (
            <div key={index} className="m-2">
              <CustomCard
                title={data.title}
                category={data.category}
                author={data.author}
                imageSrc={data.imageSrc}
                views={data.views}
                comments={data.comments}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ViewCourses

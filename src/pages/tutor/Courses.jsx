// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import NavTutor from "../../components/NavTutor"
import Card from "../../components/Card"

// Dummy data for demonstration
const courses = [
  {
    id: 1,
    title: "Introduction to AI",
    category: "Artificial Intelligence",
    price: "Free",
    author: "John Doe",
    imageSrc: "/images/videotest.png",
    views: 1500,
    comments: 8,
    dateAdded: "2023-08-15",
  },
  {
    id: 2,
    title: "Web Development with MERN",
    category: "Web Development",
    price: "Paid",
    author: "Jane Smith",
    imageSrc: "/images/videotest.png",
    views: 2300,
    comments: 12,
    dateAdded: "2024-01-20",
  },
  {
    id: 3,
    title: "Data Science Bootcamp",
    category: "Data Science",
    price: "Paid",
    author: "David Lee",
    imageSrc: "/images/videotest.png",
    views: 900,
    comments: 4,
    dateAdded: "2023-10-05",
  },
  // Add more courses as needed
]

const Courses = () => {
  const [filter, setFilter] = useState({
    category: "",
    price: "",
    popularity: "",
    dateAdded: "",
  })

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }))
  }

  const filteredCourses = courses.filter((course) => {
    return (
      (filter.category ? course.category === filter.category : true) &&
      (filter.price ? course.price === filter.price : true) &&
      (filter.popularity
        ? filter.popularity === "highest"
          ? course.views >= 2000
          : course.views < 2000
        : true) &&
      (filter.dateAdded
        ? filter.dateAdded === "latest"
          ? new Date(course.dateAdded) >= new Date("2023-10-01")
          : new Date(course.dateAdded) < new Date("2023-10-01")
        : true)
    )
  })

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <NavTutor />

      {/* Filter Section */}
      <div className="p-4 mb-6 pt-20">
        <h2 className="text-xl font-semibold mb-4">Filter Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="category">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={filter.category}
              onChange={handleFilterChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Categories</option>
              <option value="Artificial Intelligence">
                Artificial Intelligence
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="price">
              Price
            </label>
            <select
              name="price"
              id="price"
              value={filter.price}
              onChange={handleFilterChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Prices</option>
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
          </div>

          {/* Popularity Filter */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="popularity">
              Popularity
            </label>
            <select
              name="popularity"
              id="popularity"
              value={filter.popularity}
              onChange={handleFilterChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Popularity</option>
              <option value="highest">Highest Views</option>
              <option value="lowest">Lowest Views</option>
            </select>
          </div>

          {/* Date Added Filter */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="dateAdded">
              Date Added
            </label>
            <select
              name="dateAdded"
              id="dateAdded"
              value={filter.dateAdded}
              onChange={handleFilterChange}
              className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Any Date</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Courses</h2>
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                title={course.title}
                category={course.category}
                author={course.author}
                imageSrc={course.imageSrc}
                views={course.views}
                comments={course.comments}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No courses match the selected filters.
          </p>
        )}
      </div>
    </div>
  )
}

export default Courses

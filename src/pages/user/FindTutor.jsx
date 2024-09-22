// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import NavUser from "../../components/NavUser"
import Footer from "../../components/Footer"
import TutorCard from "../../components/TutorCard"

const tagsData = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Web Development",
  "Front-End Development",
  "Back-End Development",
  "Full-Stack Development",
  "Data Science",
  "Blockchain",
  "Cloud Computing",
  "DevOps",
  "Cyber Security",
  "Game Development",
  "UI/UX Design",
  "Mobile App Development",
  "Internet of Things",
  "Natural Language Processing",
  "Augmented Reality",
  "Quantum Computing",
  "Virtual Reality",
  "Big Data",
  "Robotics",
  "Software Engineering",
  "Biotechnology",
  "Ethical Hacking",
  "Digital Marketing",
  "Finance and Investment",
  "E-Commerce Development",
  "Health Tech",
  "3D Printing",
  "Autonomous Vehicles",
  "Smart Cities",
  "Sustainable Energy",
  "Genomics",
  "API Development",
  "Microservices Architecture",
  "Data Visualization",
  "Business Intelligence",
  "Game Design",
  "Augmented Analytics",
  "Search Engine Optimization",
  "Content Management Systems",
  "Responsive Design",
  "Mobile Game Development",
  "Agile Methodologies",
  "Remote Sensing",
  "Data Warehousing",
  "Internet Security",
  "Digital Forensics",
  "Chatbot Development",
  "Predictive Analytics",
  "Machine Vision",
  "Smart Contracts",
  "Edge Computing",
  "Software Testing",
  "Network Engineering",
  "Embedded Systems",
  "Artificial Neural Networks",
  "Image Processing",
  "Human-Computer Interaction",
  "Voice Recognition",
  "Tech Entrepreneurship",
]

const FindTutor = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchMethod, setSearchMethod] = useState("name") // Default search method
  const [selectedTags, setSelectedTags] = useState([])
  const [recommendations, setRecommendations] = useState([]) // To store fetched recommendations
  const [loading, setLoading] = useState(false) // Loading state for API request
  const [error, setError] = useState(null) // To handle API errors

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleTagChange = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const handleSearchSubmit = async () => {
    let searchData

    const studentTags =
      selectedTags.length > 0
        ? selectedTags.join(", ")
        : "Python, Data Analysis" // Default tags
    const studentDescription =
      searchQuery || "I want to learn about mobile app developer." // Default description

    searchData = {
      student_tags: studentTags,
      student_description: studentDescription,
    }

    console.log("Search Data:", searchData)

    // API call to backend
    try {
      setLoading(true)
      setError(null)

      const response = await fetch(
        "http://localhost:8000/api/recommend-tutors/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchData),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to fetch recommendations.")
      }

      const result = await response.json()
      console.log("Recommendations:", result)

      // Update recommendations based on the API response
      setRecommendations(result)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSearchSubmit()
  }, [])

  const renderSearchInput = () => {
    switch (searchMethod) {
      case "name":
        return (
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearch}
              className="border rounded p-2 w-full mt-2"
            />
            <button
              onClick={handleSearchSubmit}
              className="bg-primary text-white rounded px-4"
            >
              Search
            </button>
          </div>
        )
      case "tags":
        return (
          <div className="mt-2 flex flex-wrap">
            {tagsData.map((tag) => (
              <label key={tag} className="mr-2 mb-2">
                <input
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  className="mr-1"
                />
                <span className="border rounded p-2 cursor-pointer transition duration-200 ease-in-out hover:bg-primary hover:text-white">
                  {tag}
                </span>
              </label>
            ))}
            <button
              onClick={handleSearchSubmit}
              className="bg-primary text-white rounded px-4 mt-2"
            >
              Search
            </button>
          </div>
        )
      case "query":
        return (
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Enter your query..."
              value={searchQuery}
              onChange={handleSearch}
              className="border rounded p-2 w-full mt-2"
            />
            <button
              onClick={handleSearchSubmit}
              className="bg-primary text-white rounded px-4"
            >
              Search
            </button>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen relative">
      <NavUser />
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-28">
        {/* Search Method Selector */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mt-8 mb-8 text-primaryDark">
            Find a Tutor
          </h2>
          <div className="flex space-x-4 mb-4">
            <button
              className={`px-4 py-2 rounded ${
                searchMethod === "name"
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => {
                setSearchMethod("name")
                setSearchQuery("") // Reset search query
                setSelectedTags([]) // Reset selected tags
              }}
            >
              Search by Name
            </button>
            <button
              className={`px-4 py-2 rounded ${
                searchMethod === "tags"
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => {
                setSearchMethod("tags")
                setSearchQuery("") // Reset search query
                setSelectedTags([]) // Reset selected tags
              }}
            >
              Search by Tags
            </button>
            <button
              className={`px-4 py-2 rounded ${
                searchMethod === "query"
                  ? "bg-primary text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => {
                setSearchMethod("query")
                setSearchQuery("") // Reset search query
                setSelectedTags([]) // Reset selected tags
              }}
            >
              Search by Query
            </button>
          </div>
          {renderSearchInput()}
        </div>

        {/* Search Results Section */}
        <div className="mt-8 mb-8">
          <h2 className="text-xl font-semibold">Search Results</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : recommendations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recommendations.map((tutor, index) => (
                <TutorCard
                  key={index}
                  name={tutor.name}
                  courses={tutor.courses}
                  rating={tutor.rating}
                  avatarUrl={tutor.avatarUrl}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No results found based on your search.
            </p>
          )}
        </div>

        {/* Recommendations Section */}
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">
            Recommended Based on Your Interest
          </h2>
          <button className="text-primaryDark hover:underline">View All</button>
        </div>

        {/* Render Recommended Tutors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((tutor, index) => (
            <TutorCard
              key={index}
              name={tutor.name}
              courses={tutor.courses}
              rating={tutor.rating}
              avatarUrl={tutor.avatarUrl}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default FindTutor

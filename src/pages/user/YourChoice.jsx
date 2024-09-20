// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"

// Updated and more diverse tags for course topics
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

const YourChoice = () => {
  const [selectedTags, setSelectedTags] = useState([])

  // Toggle tag selection
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag)) // Deselect tag
    } else if (selectedTags.length < 10) {
      // Limit selection to 10 tags
      setSelectedTags([...selectedTags, tag]) // Select tag
    }
  }

  // Handle 'Continue' button click
  const handleContinueClick = () => {
    if (selectedTags.length >= 5) {
      console.log("Selected Tags:", selectedTags)
    } else {
      alert("Please select at least 5 tags")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-5 bg-gray-100">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 text-primaryDark text-center">
        Select Topics You Like
      </h1>
      <p className="text-lg mb-8 text-center text-gray-600">
        Please select at least 5 topics to get personalized recommendations.
      </p>

      {/* Selected Tags */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap items-center justify-center mb-6 max-w-3xl">
          {selectedTags.map((tag) => (
            <div
              key={tag}
              className="px-4 py-2 m-2 rounded-full bg-primary text-white font-semibold text-sm flex align-center w-max cursor-pointer"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
              <span className="ml-2 text-xl leading-none">&times;</span>
            </div>
          ))}
        </div>
      )}

      {/* Tags to Select */}
      <div className="flex flex-wrap justify-center max-w-4xl">
        {tagsData.map((tag) => (
          <div
            key={tag}
            className={`px-4 py-2 m-2 rounded-full text-sm font-semibold cursor-pointer transition duration-200 ease-in-out ${
              selectedTags.includes(tag)
                ? "bg-primaryDark text-white"
                : "bg-gray-300 hover:bg-primaryHover"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <button
        className={`mt-8 px-6 py-3 rounded-lg text-white font-bold transition duration-200 ease-in-out ${
          selectedTags.length >= 5
            ? "bg-primaryDark hover:bg-primaryHover"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        onClick={handleContinueClick}
        disabled={selectedTags.length < 5}
      >
        Continue
      </button>
    </div>
  )
}

export default YourChoice

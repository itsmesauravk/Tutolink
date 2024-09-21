// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import NavTutor from "../../components/NavTutor"
import Footer from "../../components/Footer"

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    category: "",
    isFree: true,
    price: "",
    video: null,
    thumbnail: null,
    learningOutcomes: [""],
    description: "",
    tags: [],
  })

  const availableCategories = [
    "Programming",
    "Mathematics",
    "Science",
    "Arts",
    "Business",
    "Languages",
    "Health",
  ]

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setCourseData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    setCourseData((prev) => ({
      ...prev,
      video: e.target.files[0],
    }))
  }

  const handleThumbnailChange = (e) => {
    setCourseData((prev) => ({
      ...prev,
      thumbnail: e.target.files[0],
    }))
  }

  const handleLearningOutcomeChange = (index, value) => {
    const outcomes = [...courseData.learningOutcomes]
    outcomes[index] = value
    setCourseData((prev) => ({
      ...prev,
      learningOutcomes: outcomes,
    }))
  }

  const addLearningOutcome = () => {
    setCourseData((prev) => ({
      ...prev,
      learningOutcomes: [...prev.learningOutcomes, ""],
    }))
  }

  const handleCategoryChange = (e) => {
    setCourseData((prev) => ({
      ...prev,
      category: e.target.value,
    }))
  }

  const handleTagChange = (e) => {
    const { value } = e.target
    setCourseData((prev) => ({
      ...prev,
      tags: courseData.tags.includes(value)
        ? courseData.tags.filter((tag) => tag !== value)
        : [...prev.tags, value],
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(courseData)
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <NavTutor />
      <div className="p-6 rounded-lg pt-24 mb-14">
        <h1 className="text-3xl font-bold text-primary mb-6">Add a Course</h1>
        <form onSubmit={handleSubmit}>
          {/* Course Title */}
          <div className="mb-4">
            <label className="block text-secondary mb-2" htmlFor="title">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={courseData.title}
              onChange={handleChange}
              className="w-full p-3 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-secondary mb-2" htmlFor="category">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={courseData.category}
              onChange={handleCategoryChange}
              className="w-full p-3 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select a category</option>
              {availableCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Free or Paid */}
          <div className="mb-4">
            <label className="block text-secondary mb-2">Course Type</label>
            <label className="inline-flex items-center mr-6">
              <input
                type="radio"
                name="isFree"
                value="true"
                checked={courseData.isFree}
                onChange={() => setCourseData({ ...courseData, isFree: true })}
                className="form-radio h-4 w-4 text-primary"
              />
              <span className="ml-2">Free</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="isFree"
                value="false"
                checked={!courseData.isFree}
                onChange={() => setCourseData({ ...courseData, isFree: false })}
                className="form-radio h-4 w-4 text-primary"
              />
              <span className="ml-2">Paid</span>
            </label>
          </div>

          {/* Price */}
          {!courseData.isFree && (
            <div className="mb-4">
              <label className="block text-secondary mb-2" htmlFor="price">
                Price (Rs.)
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={courseData.price}
                onChange={handleChange}
                className="w-full p-3 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required={!courseData.isFree}
              />
            </div>
          )}

          {/* Video Upload */}
          <div className="mb-4">
            <label className="block text-secondary mb-2" htmlFor="video">
              Course Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="w-full p-3 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {courseData.video && (
              <video className="mt-2 w-full" controls>
                <source
                  src={URL.createObjectURL(courseData.video)}
                  type={courseData.video.type}
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>

          {/* Thumbnail Upload */}
          <div className="mb-4">
            <label className="block text-secondary mb-2" htmlFor="thumbnail">
              Thumbnail Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="w-full p-3 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            {courseData.thumbnail && (
              <img
                src={URL.createObjectURL(courseData.thumbnail)}
                alt="Thumbnail Preview"
                className="mt-2 w-full h-40 object-cover rounded"
              />
            )}
          </div>

          {/* Learning Outcomes */}
          <div className="mb-4">
            <label className="block text-secondary mb-2">
              Learning Outcomes
            </label>
            {courseData.learningOutcomes.map((outcome, index) => (
              <input
                key={index}
                type="text"
                value={outcome}
                onChange={(e) =>
                  handleLearningOutcomeChange(index, e.target.value)
                }
                placeholder={`Outcome ${index + 1}`}
                className="w-full p-3 mb-2 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            ))}
            <button
              type="button"
              onClick={addLearningOutcome}
              className="mt-2 bg-primary text-white px-4 py-2 rounded-lg"
            >
              + Add Outcome
            </button>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <label className="block text-secondary mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {tagsData.map((tag, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleTagChange({ target: { value: tag } })}
                  className={`px-4 py-2 rounded-lg ${
                    courseData.tags.includes(tag)
                      ? "bg-primary text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-secondary mb-2" htmlFor="description">
              Course Description
            </label>
            <textarea
              name="description"
              id="description"
              value={courseData.description}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primaryHover text-white py-3 px-6 rounded-lg"
          >
            Upload Course
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default AddCourse

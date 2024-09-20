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
  })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(courseData)
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <NavTutor />
      <div className="p-6 rounded-lg pt-24">
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
            <input
              type="text"
              name="category"
              id="category"
              value={courseData.category}
              onChange={handleChange}
              className="w-full p-3 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
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
              className="mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark"
            >
              Add Learning Outcome
            </button>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-secondary mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={courseData.description}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-primary rounded focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-secondary-dark"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default AddCourse

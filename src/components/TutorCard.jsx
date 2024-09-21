// eslint-disable-next-line no-unused-vars
import React from "react"

const TutorCard = ({ name, courses, rating, avatarUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={avatarUrl}
            alt={`${name}'s avatar`}
          />
          <div className="ml-2">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{courses} courses</p>
            <p className="text-sm text-gray-500">Rating: {rating}</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primaryHover transition">
          View Profile
        </button>
      </div>
    </div>
  )
}

export default TutorCard

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import NavTutor from "../../components/NavTutor"
import Footer from "../../components/Footer"

const Classes = () => {
  const [postponedClass, setPostponedClass] = useState(null)
  const [reason, setReason] = useState("")
  const [newDate, setNewDate] = useState("")
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  // Sample data for classes
  const classesData = {
    today: [
      {
        id: 1,
        subject: "Mathematics",
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        tutor: "John Doe",
        price: "$30",
      },
      {
        id: 2,
        subject: "Physics",
        startTime: "1:00 PM",
        endTime: "2:00 PM",
        tutor: "Jane Smith",
        price: "$25",
      },
    ],
    upcoming: [
      {
        id: 3,
        subject: "Data Science",
        date: "2024-09-22",
        startTime: "3:00 PM",
        endTime: "4:00 PM",
        tutor: "Michael Brown",
        price: "$40",
      },
      {
        id: 4,
        subject: "Programming",
        date: "2024-09-24",
        startTime: "2:00 PM",
        endTime: "3:00 PM",
        tutor: "Emily Johnson",
        price: "$35",
      },
    ],
    completed: [
      {
        id: 5,
        subject: "Statistics",
        date: "2024-09-19",
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        tutor: "David Lee",
        price: "$20",
      },
      {
        id: 6,
        subject: "English Literature",
        date: "2024-09-18",
        startTime: "12:00 PM",
        endTime: "1:00 PM",
        tutor: "Sarah Wilson",
        price: "$15",
      },
    ],
  }

  const handlePostponeClick = (cls) => {
    setPostponedClass(cls)
    setIsPopupOpen(true)
  }

  const handlePostponeSubmit = (e) => {
    e.preventDefault()
    // Logic to handle postponement
    console.log(
      `Class postponed: ${postponedClass.subject}, Reason: ${reason}, New Date: ${newDate}`
    )
    setIsPopupOpen(false)
    setReason("")
    setNewDate("")
  }

  return (
    <div>
      <NavTutor />
      <div className="min-h-screen bg-gray-50 p-6 pt-28">
        <h1 className="text-3xl font-bold text-primary mb-8">Classes</h1>

        {/* Today’s Classes Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Today</h2>
          {classesData.today.length > 0 ? (
            <div className="space-y-4">
              {classesData.today.map((cls) => (
                <div
                  key={cls.id}
                  className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {cls.subject}
                  </h3>
                  <p className="text-md text-gray-600">
                    <strong>Time:</strong> {cls.startTime} - {cls.endTime}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Tutor:</strong> {cls.tutor}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Price:</strong> {cls.price}
                  </p>
                  <div className="flex space-x-4 mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">
                      Open Google Meet
                    </button>
                    <button
                      className="px-4 py-2 bg-yellow-500 text-white rounded"
                      onClick={() => handlePostponeClick(cls)}
                    >
                      Postpone
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded">
                      Mark as Completed
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-md text-gray-500">
              No classes scheduled for today.
            </p>
          )}
        </div>

        {/* Upcoming Classes Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Upcoming
          </h2>
          {classesData.upcoming.length > 0 ? (
            <div className="space-y-4">
              {classesData.upcoming.map((cls) => (
                <div
                  key={cls.id}
                  className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {cls.subject}
                  </h3>
                  <p className="text-md text-gray-600">
                    <strong>Date:</strong> {cls.date}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Time:</strong> {cls.startTime} - {cls.endTime}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Tutor:</strong> {cls.tutor}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Price:</strong> {cls.price}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-md text-gray-500">
              No upcoming classes scheduled.
            </p>
          )}
        </div>

        {/* Completed Classes Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Completed
          </h2>
          {classesData.completed.length > 0 ? (
            <div className="space-y-4">
              {classesData.completed.map((cls) => (
                <div
                  key={cls.id}
                  className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-800">
                    {cls.subject}
                  </h3>
                  <p className="text-md text-gray-600">
                    <strong>Date:</strong> {cls.date}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Time:</strong> {cls.startTime} - {cls.endTime}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Tutor:</strong> {cls.tutor}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Price:</strong> {cls.price}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-md text-gray-500">
              No completed classes available.
            </p>
          )}
        </div>

        {/* Postponement Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Postpone Class: {postponedClass.subject}
              </h2>
              <form onSubmit={handlePostponeSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Reason for Postponement:
                  </label>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">New Date:</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mr-4 px-4 py-2 bg-red-500 text-white rounded"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default Classes

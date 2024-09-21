// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import NavTutor from "../../components/NavTutor"
import Footer from "../../components/Footer"

const ClassesRequests = () => {
  // Sample data for class requests
  const classRequests = [
    {
      id: 1,
      subject: "Mathematics",
      date: "2024-09-22",
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      price: "$30",
      requester: "Alice Johnson",
    },
    {
      id: 2,
      subject: "Physics",
      date: "2024-09-23",
      startTime: "1:00 PM",
      endTime: "2:00 PM",
      price: "$25",
      requester: "Bob Smith",
    },
  ]

  const [reason, setReason] = useState("")
  const [isRejecting, setIsRejecting] = useState(false)
  const [currentRequest, setCurrentRequest] = useState(null)

  const handleAccept = (request) => {
    console.log(
      `Accepted request for ${request.subject} from ${request.requester}`
    )
    // Add logic for accepting the request
  }

  const handleReject = (request) => {
    setCurrentRequest(request)
    setIsRejecting(true)
  }

  const handleRejectSubmit = (e) => {
    e.preventDefault()
    console.log(
      `Rejected request for ${currentRequest.subject} from ${currentRequest.requester}. Reason: ${reason}`
    )
    // Add logic for rejecting the request
    setIsRejecting(false)
    setReason("")
  }

  return (
    <div>
      <NavTutor />
      <div className="min-h-screen bg-gray-50 p-6 pt-28">
        <h1 className="text-3xl font-bold text-primary mb-8">Class Requests</h1>
        <div className="space-y-4">
          {classRequests.map((request) => (
            <div
              key={request.id}
              className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {request.subject}
              </h3>
              <p className="text-md text-gray-600">
                <strong>Date:</strong> {request.date}
              </p>
              <p className="text-md text-gray-600">
                <strong>Time:</strong> {request.startTime} - {request.endTime}
              </p>
              <p className="text-md text-gray-600">
                <strong>Price:</strong> {request.price}
              </p>
              <p className="text-md text-gray-600">
                <strong>Requester:</strong> {request.requester}
              </p>
              <div className="flex space-x-4 mt-4">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => handleAccept(request)}
                >
                  Accept
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => handleReject(request)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reject Reason Popup */}
        {isRejecting && currentRequest && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                Reject Request for: {currentRequest.subject}
              </h2>
              <form onSubmit={handleRejectSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Reason for Rejection:
                  </label>
                  <textarea
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                    rows="3"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mr-4 px-4 py-2 bg-gray-300 text-gray-700 rounded"
                    onClick={() => setIsRejecting(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-500 text-white rounded"
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

export default ClassesRequests

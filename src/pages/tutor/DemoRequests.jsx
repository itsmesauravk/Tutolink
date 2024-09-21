// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import NavTutor from "../../components/NavTutor"

const DemoRequests = () => {
  // Sample JSON data for demo requests
  const demoRequests = [
    {
      id: 1,
      studentName: "John Doe",
      subject: "Mathematics",
      requestedDate: "2024-09-25",
      message: "I would like to schedule a demo class for Algebra basics.",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      subject: "Physics",
      requestedDate: "2024-09-26",
      message: "Interested in learning more about Newton's laws of motion.",
    },
    {
      id: 3,
      studentName: "Emily Johnson",
      subject: "Programming",
      requestedDate: "2024-09-27",
      message: "I want to understand basic JavaScript concepts before booking.",
    },
    {
      id: 4,
      studentName: "Michael Brown",
      subject: "Data Science",
      requestedDate: "2024-09-28",
      message:
        "Looking to explore an intro session on data analysis with Python.",
    },
  ]

  const [modalData, setModalData] = useState({
    showModal: false,
    action: "", // "accept" or "reject"
    request: null,
  })

  const [meetingDetails, setMeetingDetails] = useState({
    meetingDate: "",
    meetLink: "",
    rejectionReason: "",
    selectedReason: "",
  })

  const defaultRejectionReasons = [
    "Tutor unavailable",
    "Topic outside of expertise",
    "Scheduling conflict",
  ]

  const handleAction = (request, action) => {
    setModalData({ showModal: true, action, request })
  }

  const handleCloseModal = () => {
    setModalData({ showModal: false, action: "", request: null })
    setMeetingDetails({
      meetingDate: "",
      meetLink: "",
      rejectionReason: "",
      selectedReason: "",
    })
  }

  const handleSendMail = () => {
    if (modalData.action === "accept") {
      // Handle sending mail with meeting details
      console.log("Meeting Date:", meetingDetails.meetingDate)
      console.log("Google Meet Link:", meetingDetails.meetLink)
    } else if (modalData.action === "reject") {
      // Handle sending rejection mail
      const reason =
        meetingDetails.selectedReason || meetingDetails.rejectionReason
      console.log("Rejection Reason:", reason)
    }
    handleCloseModal()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavTutor />
      <div className="p-6 pt-28">
        <h1 className="text-3xl font-bold text-primary mb-6">Demo Requests</h1>

        {/* Mapping through the demo requests array */}
        <div className="space-y-4">
          {demoRequests.map((request) => (
            <div
              key={request.id}
              className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm"
            >
              <h2 className="text-xl font-semibold text-secondary mb-2">
                Student: {request.studentName}
              </h2>
              <p className="text-md text-gray-700">
                <strong>Subject:</strong> {request.subject}
              </p>
              <p className="text-md text-gray-700">
                <strong>Requested Date:</strong> {request.requestedDate}
              </p>
              <p className="text-md text-gray-700">
                <strong>Message:</strong> {request.message}
              </p>
              <div className="mt-4 space-x-2">
                <button
                  onClick={() => handleAction(request, "accept")}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleAction(request, "reject")}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalData.showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            {modalData.action === "accept" ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Schedule Meeting</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Meeting Date
                  </label>
                  <input
                    type="date"
                    value={meetingDetails.meetingDate}
                    onChange={(e) =>
                      setMeetingDetails({
                        ...meetingDetails,
                        meetingDate: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Google Meet Link
                  </label>
                  <input
                    type="url"
                    placeholder="https://meet.google.com/..."
                    value={meetingDetails.meetLink}
                    onChange={(e) =>
                      setMeetingDetails({
                        ...meetingDetails,
                        meetLink: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Reject Request</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Select a Reason
                  </label>
                  <select
                    value={meetingDetails.selectedReason}
                    onChange={(e) =>
                      setMeetingDetails({
                        ...meetingDetails,
                        selectedReason: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select Reason</option>
                    {defaultRejectionReasons.map((reason, index) => (
                      <option key={index} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Or Enter Custom Reason
                  </label>
                  <input
                    type="text"
                    value={meetingDetails.rejectionReason}
                    onChange={(e) =>
                      setMeetingDetails({
                        ...meetingDetails,
                        rejectionReason: e.target.value,
                      })
                    }
                    className="w-full p-2 border rounded"
                    placeholder="Custom reason"
                  />
                </div>
              </>
            )}

            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={handleSendMail}
                className="bg-primary text-white px-4 py-2 rounded-lg"
              >
                Send Mail
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DemoRequests

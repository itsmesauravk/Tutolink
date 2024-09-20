import React, { useState } from "react"
import { BsChatFill } from "react-icons/bs"
import { FaRobot } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"

const Floating = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [chatType, setChatType] = useState(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const startChat = (type) => {
    setChatType(type)
    setIsOpen(true)
  }

  return (
    <>
      {/* Floating Buttons */}
      <div className=" fixed bottom-10 right-10 z-50 space-y-4">
        {/* Button to Chat with Bot */}
        <button
          onClick={() => startChat("bot")}
          className="bg-primary text-white p-4 rounded-full shadow-lg focus:outline-none"
        >
          <FaRobot className="w-6 h-6" />
        </button>

        {/* Button to Chat with Live Agent */}
        <button
          onClick={() => startChat("agent")}
          className="bg-primaryHover ml-2 text-white p-4 rounded-full shadow-lg focus:outline-none"
        >
          <BsChatFill className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Box */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 w-96 h-[30rem] bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {chatType === "bot" ? "Chatbot" : "Live Agent"}
              </h2>

              <RxCross2
                onClick={toggleChat}
                className="w-5 h-5 text-red-500 focus:outline-none cursor-pointer"
              />
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto">
              <p className="mb-2">
                {chatType === "bot"
                  ? "Hi! I'm your assistant. How can I help you today?"
                  : "Hi! Please wait while we connect you to a live agent."}
              </p>
              {/* Add more chat messages here */}
            </div>

            {/* Chat Input */}
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-3 border rounded focus:outline-none focus:border-primary text-sm"
              />
              <button className="bg-primary p-3 rounded text-white hover:bg-primaryHover">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Floating

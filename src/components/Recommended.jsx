// eslint-disable-next-line no-unused-vars
import React from "react"
import Card from "./Card"

// Sample JSON data for 5 cards
const cardData = [
  {
    title: "The Catalyzer",
    category: "Science",
    author: "John Doe",
    imageSrc: "/images/videotest.png",
    views: 1.5,
    comments: 8,
  },
  {
    title: "Neural Networks 101",
    category: "AI & ML",
    author: "Jane Smith",
    imageSrc: "/images/videotest.png",
    views: 2.3,
    comments: 12,
  },
  {
    title: "React Best Practices",
    category: "Web Development",
    author: "David Lee",
    imageSrc: "/images/videotest.png",
    views: 0.9,
    comments: 4,
  },
  {
    title: "Cryptography Explained",
    category: "Cybersecurity",
    author: "Alice Johnson",
    imageSrc: "/images/videotest.png",
    views: 3.1,
    comments: 15,
  },
  {
    title: "The Future of Quantum Computing",
    category: "Technology",
    author: "Mark Evans",
    imageSrc: "/images/videotest.png",
    views: 2.8,
    comments: 10,
  },
]

const Recommended = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          category={data.category}
          author={data.author}
          imageSrc={data.imageSrc}
          views={data.views}
          comments={data.comments}
        />
      ))}
    </div>
  )
}

export default Recommended

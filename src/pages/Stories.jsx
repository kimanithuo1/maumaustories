"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const allStories = [
  {
    id: 1,
    title: "The Whisper of Rebellion",
    excerpt:
      "In the dead of night, Mekatilili's eyes gleamed with fierce determination. The British had pushed too far, and now, with ancient spirits guiding her, she would ignite a fire of resistance that would burn through the Giriama lands.",
    image:
      "https://images.unsplash.com/photo-1532188363366-3a1b2ac4a338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Pre-colonial",
    author: "Wanjiru Kamau",
  },
  {
    id: 2,
    title: "Shadows in the Aberdares",
    excerpt:
      "Field Marshal Muthoni crouched in the misty forest, her heart pounding. She was no longer just a woman; she was a symbol of defiance, a ghost that haunted the colonial forces. Tonight, she would strike again.",
    image:
      "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Colonial",
    author: "Ochieng Odhiambo",
  },
  {
    id: 3,
    title: "The Last Stand of the Leopard",
    excerpt:
      "Dedan Kimathi, known as 'The Leopard', felt the noose of betrayal tightening. But even as he ran through the forest, he knew his capture would only fuel the flames of revolution he had ignited.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    category: "Colonial",
    author: "Ngugi wa Thiong'o",
  },
  {
    id: 4,
    title: "The Thunderclap of Thuku",
    excerpt:
      "Harry Thuku's voice echoed through Nairobi like thunder. As the colonial police dragged him away, he saw the spark in the eyes of his people. His arrest wasn't an end; it was the beginning of a storm.",
    image:
      "https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "Colonial",
    author: "Muthoni Garland",
  },
  {
    id: 5,
    title: "The Lioness of Pumwani",
    excerpt:
      "Mary Muthoni Nyanjiru felt the weight of oppression on her shoulders. With a war cry that would echo through generations, she led the charge against Thuku's arrest, her courage igniting a fire in the hearts of women across Kenya.",
    image:
      "https://images.unsplash.com/photo-1489367874814-f5d040621dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2146&q=80",
    category: "Colonial",
    author: "Yvonne Adhiambo Owuor",
  },
  {
    id: 6,
    title: "From Prison to Presidency",
    excerpt:
      "As Jomo Kenyatta stood on the precipice of a new Kenya, memories of Kapenguria Prison flashed before his eyes. The journey from prisoner to president had been long, but the real challenge of uniting a nation was just beginning.",
    image:
      "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Post-colonial",
    author: "Binyavanga Wainaina",
  },
]

const categories = ["All", "Pre-colonial", "Colonial", "Post-colonial"]

function Stories() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredStories =
    selectedCategory === "All" ? allStories : allStories.filter((story) => story.category === selectedCategory)

  return (
    <div className="bg-[#DFE6EB] min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-caramel text-[#385471] mb-8">Untold Stories of Kenya</h1>

        <div className="mb-8 flex flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`m-2 px-6 py-2 rounded-full transition-colors duration-200 font-prata ${
                selectedCategory === category
                  ? "bg-[#6A4BB7] text-[#DFE6EB]"
                  : "bg-[#37ADD5] text-[#385471] hover:bg-[#6A4BB7] hover:text-[#DFE6EB]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story) => (
            <div
              key={story.id}
              className="bg-[#DFE6EB] shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img src={story.image || "/placeholder.svg"} alt={story.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-prata text-[#385471] mb-2">{story.title}</h2>
                <p className="text-[#385471] mb-4 font-teresa">{story.excerpt}</p>
                <div className="flex items-center mb-4">
                  <img
                    className="h-10 w-10 rounded-full mr-2"
                    src={`https://i.pravatar.cc/150?u=${story.author}`}
                    alt={story.author}
                  />
                  <span className="text-sm text-[#385471] font-teresa">{story.author}</span>
                </div>
                <Link
                  to={`/stories/${story.id}`}
                  className="inline-block bg-[#37ADD5] text-[#DFE6EB] px-4 py-2 rounded font-prata hover:bg-[#6A4BB7] transition-colors duration-200"
                >
                  Read full story
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stories


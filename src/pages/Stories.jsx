"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronUp, Clock, User, BookOpen, Tag } from "lucide-react"

const allStories = [
  // Pre-Colonial Era Stories
  {
    id: 1,
    title: "The Wrath of the Oracle – The Rise of Menya Araap Kisiara",
    excerpt:
      "Menya Araap Kisiara, a young warrior of the Kipsigis, is haunted by a prophecy that speaks of his name being sung in the winds long after his death. When the Maasai launch a brutal attack on his village, burning their granaries and taking prisoners, Menya must rally his people, not just for revenge, but for survival.",
    image: "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ix",
    image: "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Pre-colonial",
    author: "Kimani Thuo",
    readTime: "15 min",
    tags: ["War", "Prophecy", "Leadership"],
  },
  {
    id: 2,
    title: "The Legend of Lwanda Magere",
    excerpt:
      "In the heart of Kano plains lived a warrior whose skin was harder than stone. Lwanda Magere's supernatural strength made him invincible in battle, until love became his ultimate weakness. A tale of power, betrayal, and the price of pride.",
    image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Pre-colonial",
    author: "Kimani Thuo",
    readTime: "12 min",
    tags: ["Legend", "Romance", "Warfare"],
  },
  {
    id: 3,
    title: "The Prophecy of Syokimau",
    excerpt:
      "Before the iron snake cut through our lands, she saw it all. Syokimau, the great Kamba prophetess, foresaw the coming of the railway and the changes it would bring. Her visions would shape the destiny of her people.",
    image: "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Pre-colonial",
    author: "Kimani Thuo",
    readTime: "20 min",
    tags: ["Prophecy", "Culture", "Change"],
  },

  // Colonial Era Stories
  {
    id: 4,
    title: "Shadows in the Aberdares",
    excerpt:
      "Field Marshal Muthoni crouched in the misty forest, her heart pounding. She was no longer just a woman; she was a symbol of defiance, a ghost that haunted the colonial forces. Tonight, she would strike again.",
    image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Colonial",
    author: "Kimani Thuo",
    readTime: "18 min",
    tags: ["Resistance", "Freedom", "Courage"],
  },
  {
    id: 5,
    title: "The Last Stand of the Leopard",
    excerpt:
      "Dedan Kimathi, known as 'The Leopard', felt the noose of betrayal tightening. But even as he ran through the forest, he knew his capture would only fuel the flames of revolution he had ignited.",
    image: "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Colonial",
    author: "Kimani Thuo",
    readTime: "25 min",
    tags: ["Revolution", "Leadership", "Sacrifice"],
  },
  {
    id: 6,
    title: "The Silent Warriors of Nyeri",
    excerpt:
      "They moved like shadows through the forest, carrying messages and supplies. The women of Nyeri played a crucial role in the Mau Mau uprising, their courage often unsung but never forgotten.",
    image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Colonial",
    author: "Kimani Thuo",
    readTime: "15 min",
    tags: ["Women", "Resistance", "Courage"],
  },

  // Post-Colonial Era Stories
  {
    id: 7,
    title: "The Man Who Knew Too Much – The Assassination of Tom Mboya",
    excerpt:
      "Tom Mboya was a man of the people. A visionary. A leader. But power is a dangerous thing, and in Kenya's early days of independence, enemies were everywhere. When he uncovers a plot that could shake the foundation of the new government, he becomes the most hunted man in Nairobi.",
    image: "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Post-colonial",
    author: "Kimani Thuo",
    readTime: "22 min",
    tags: ["Politics", "Mystery", "Power"],
  },
  {
    id: 8,
    title: "The Price of Truth",
    excerpt:
      "When journalist Kung'u Karumba stumbles upon documents revealing corruption in the highest offices, he must choose between his safety and his duty. A story of courage in the face of power.",
    image: "https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Post-colonial",
    author: "Kimani Thuo",
    readTime: "20 min",
    tags: ["Journalism", "Corruption", "Justice"],
  },
  {
    id: 9,
    title: "Dreams of Democracy",
    excerpt:
      "In the tumultuous years following independence, Maria Nyokabi finds herself caught between tradition and progress. Her fight for women's rights becomes a battle for the soul of a nation.",
    image: "https://images.unsplash.com/photo-1580746738099-6eb89e9ed58f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Post-colonial",
    author: "Kimani Thuo",
    readTime: "17 min",
    tags: ["Politics", "Women", "Change"],
  },
]

const categories = ["All", "Pre-colonial", "Colonial", "Post-colonial"]

function Stories() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedTag, setSelectedTag] = useState(null)
  const storiesPerPage = 6

  const filteredStories = allStories
    .filter((story) => selectedCategory === "All" || story.category === selectedCategory)
    .filter((story) => !selectedTag || story.tags.includes(selectedTag))

  const indexOfLastStory = currentPage * storiesPerPage
  const indexOfFirstStory = indexOfLastStory - storiesPerPage
  const currentStories = filteredStories.slice(indexOfFirstStory, indexOfLastStory)

  // Get all unique tags
  const allTags = [...new Set(allStories.flatMap((story) => story.tags))]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-[#F3E5D6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-caramel text-[#79483F] mb-4">Untold Stories of Kenya</h1>
          <p className="text-lg font-teresa text-black max-w-2xl mx-auto">
            Journey through time with our collection of stories spanning pre-colonial, colonial, and post-colonial
            Kenya.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentPage(1)
                  setSelectedTag(null)
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-prata text-sm
                  ${
                    selectedCategory === category
                      ? "bg-[#79483F] text-[#F3E5D6] shadow-lg scale-105"
                      : "bg-[#D7E2B6] text-[#79483F] hover:bg-[#E0B1A8] hover:text-[#F3E5D6]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(selectedTag === tag ? null : tag)
                  setCurrentPage(1)
                }}
                className={`px-4 py-1 rounded-full text-xs transition-all duration-300 flex items-center gap-1
                  ${
                    selectedTag === tag
                      ? "bg-[#79483F] text-[#F3E5D6] shadow-md scale-105"
                      : "bg-[#E0B1A8] text-[#79483F] hover:bg-[#D7E2B6] hover:text-[#79483F]"
                  }`}
              >
                <Tag className="h-3 w-3" />
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentStories.map((story) => (
            <div
              key={story.id}
              className="group bg-[#D7E2B6] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#79483F] text-[#F3E5D6] text-xs font-prata mb-2">
                    {story.category}
                  </span>
                  <h2 className="text-xl font-prata text-white mb-1 line-clamp-2">{story.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-black font-teresa mb-4 line-clamp-3">{story.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#E0B1A8] text-[#79483F] rounded-full text-xs font-teresa">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-[#79483F]">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-teresa">{story.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-teresa">{story.readTime}</span>
                  </div>
                </div>
                <Link
                  to={`/stories/${story.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-[#79483F] hover:text-[#E0B1A8] transition-colors duration-200"
                >
                  <span className="font-prata">Read full story</span>
                  <BookOpen className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg font-teresa text-black">No stories found matching your criteria.</p>
          </div>
        )}

        {filteredStories.length > storiesPerPage && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: Math.ceil(filteredStories.length / storiesPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentPage(i + 1)
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200
                  ${
                    currentPage === i + 1
                      ? "bg-[#79483F] text-[#F3E5D6] shadow-lg scale-110"
                      : "bg-[#D7E2B6] text-[#79483F] hover:bg-[#E0B1A8] hover:text-[#F3E5D6]"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-[#79483F] text-[#F3E5D6] p-3 rounded-full shadow-lg hover:bg-[#E0B1A8] transition-all duration-200 hover:scale-110 z-50"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}

export default Stories


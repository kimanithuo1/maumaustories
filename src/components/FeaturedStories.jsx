import { Link } from "react-router-dom"
import { Scroll, BookOpen } from "lucide-react"

const featuredStories = [
  {
    id: 1,
    title: "The Whisper of Rebellion",
    excerpt:
      "In the dead of night, Mekatilili wa Menza's eyes gleamed with fierce determination. The British had pushed too far, and now, with ancient spirits guiding her, she would ignite a fire of resistance that would burn through the Giriama lands...",
    image: "https://images.unsplash.com/photo-1532188363366-3a1b2ac4a338",
    category: "Colonial Era",
    author: "Ngugi wa Thiong'o",
    readTime: "12 min read",
    date: "June 15, 2023",
  },
  {
    id: 2,
    title: "The Bloody Dawn of Chuka",
    excerpt:
      "The British patrol moved through the dense forests of Chuka with their rifles raised. Colonel Richard Fenton had received orders: eliminate all Mau Mau resistance in the area. But the forest held secrets they couldn't begin to understand...",
    image: "https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c",
    category: "Colonial Era",
    author: "Ochieng Odhiambo",
    readTime: "15 min read",
    date: "June 10, 2023",
  },
  {
    id: 3,
    title: "The Last Dawn at Hola",
    excerpt:
      "The scorching sun beat down on the barren landscape of Hola. The once-proud warriors of the Mau Mau, now reduced to ragged shadows of themselves, toiled under the merciless heat. But even here, in this desolate camp, the spirit of resistance lived on...",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    category: "Colonial Era",
    author: "Wanjiru Kamau",
    readTime: "10 min read",
    date: "June 5, 2023",
  },
]

function FeaturedStories() {
  return (
    <section className="bg-[#F5F1E9] py-16 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[url('/vintage-border.png')] bg-repeat-x opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('/vintage-border.png')] bg-repeat-x opacity-50 transform rotate-180"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <div className="inline-block">
            <h2 className="text-4xl font-caramel text-[#2C1810] mb-4 relative">
              Featured Stories
              <div className="absolute -bottom-4 left-0 right-0 h-1 bg-[#8B4513] opacity-20"></div>
            </h2>
          </div>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-[#5C3D2E] font-teresa italic">
            Step into the past and experience the untold tales of Kenya's heroes and heroines.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {featuredStories.map((story) => (
            <article
              key={story.id}
              className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-xl relative group"
            >
              <div className="absolute inset-0 bg-[#2C1810] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

              {/* Story Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#8B4513] text-[#F5F1E9] px-3 py-1 rounded text-sm font-prata">
                  {story.category}
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 border-t border-[#8B4513] border-opacity-20">
                <h3 className="text-2xl font-prata text-[#2C1810] mb-3 leading-tight">{story.title}</h3>

                <p className="text-[#5C3D2E] mb-4 font-teresa line-clamp-3">{story.excerpt}</p>

                {/* Author and Meta Info */}
                <div className="flex items-center justify-between mt-4 border-t border-[#8B4513] border-opacity-20 pt-4">
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full border-2 border-[#8B4513] border-opacity-20"
                      src={`https://i.pravatar.cc/150?u=${story.author}`}
                      alt={story.author}
                    />
                    <div className="ml-3">
                      <p className="text-sm font-prata text-[#2C1810]">{story.author}</p>
                      <p className="text-xs text-[#5C3D2E] font-teresa">{story.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-[#8B4513] text-sm">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{story.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link
                  to={`/stories/${story.id}`}
                  className="mt-6 inline-flex items-center text-[#8B4513] hover:text-[#2C1810] transition-colors duration-200 group"
                >
                  <span className="font-prata mr-2">Read full story</span>
                  <Scroll className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-[url('/corner-ornament.png')] bg-contain bg-no-repeat opacity-30"></div>
        <div className="absolute top-0 right-0 w-16 h-16 bg-[url('/corner-ornament.png')] bg-contain bg-no-repeat opacity-30 transform rotate-90"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-[url('/corner-ornament.png')] bg-contain bg-no-repeat opacity-30 transform -rotate-90"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-[url('/corner-ornament.png')] bg-contain bg-no-repeat opacity-30 transform rotate-180"></div>
      </div>
    </section>
  )
}

export default FeaturedStories

